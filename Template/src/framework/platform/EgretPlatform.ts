/**
 * 白鹭开放平台
 * @author lucywang
 * @date 2018/01/12
 * 
 */

class EgretPlatform implements Platform {
    private _Authorization: string = "ZW1tLWx1b3lhbnBpbmcteW91Y2FuZ3Vlc3N0aGlzLTE3NTA3";
    async getUserInfo() {
        return { nickName: "username" }
    }

    async init() {
        console.log("start nest init");
        let info: any = {};
        info.egretAppId = 88888;
        info.version = 2;
        info.debug = true;

        nest.easyuser.startup(info, function (resultInfo: nest.core.ResultCallbackInfo) {
            if (resultInfo.result == 0) {
                platform.login();
            } else {
                console.log("nest init fail");
            }
        });
    }

    async login() {
        console.log("login start");
        let loginTypes: Array<nest.easyuser.ILoginType> = nest.easyuser.getLoginTypes();
        if (loginTypes.length) {
            let typeInfo: nest.easyuser.ILoginType = loginTypes[0];
            if (loginTypes.length == 1 && (typeInfo.loginType == "wx" || typeInfo.loginType == "qq")) {
                nest.easyuser.login(typeInfo, this._onLoginHandler.bind(this));
            }
        }
        else {//不需要登录按钮，直接调用登录进游戏
            nest.easyuser.login({}, this._onLoginHandler.bind(this));
        }
    }

    async payOrder(gid) {
        let param = JSON.stringify({ gid: gid, Authorization: this._Authorization });
        Http.post("http://47.104.85.224:3000/shop/gift/buy/", param, this.payOrderHandler, this);
    };

    async pay(goodsId) {
        let payInfo: nest.iap.PayInfo = {
            goodsId: goodsId,
            goodsNumber: "1",
            serverId: "1",
            ext: "",
        };
        console.log(payInfo);
        nest.iap.pay(payInfo, this._onPayHandler.bind(this));
    }

    private _onLoginHandler(data: nest.user.LoginCallbackInfo): void {
        if (data.result == 0) {
            egret.log("log Success");
            let param = JSON.stringify({ token: data.token });
            Http.post("http://47.104.85.224:3000/user/login/egret/", param, (e) => {
                var request = e.currentTarget;
                let data = JSON.parse(request.response);
                console.log("return data : ", request.response);
                if (data.code == "200") {
                    SceneManager.Instance.replaceScene(SceneConst[SceneConst.HallScene]);
                }
            }, this);
        }
        else {
            egret.log("log Fail");
        }
    }

	/**
	 * 下订单回调
	 */
    private payOrderHandler(e) {
        var request = e.currentTarget;
        let result = JSON.parse(request.response);
        console.log("return data : ", request.response);
        if (result.code == "200") {
            //下单
            platform.pay(result.data.product_id);
        }

    }

    private _onPayHandler(payInfo: nest.iap.PayCallbackInfo): void {
        console.log(payInfo);
        if (payInfo.result == 0) {
            //支付成功，通知发货
            let param = {
                orderId: "",
                id: "",
                money: "",
                time: "",
                serverId: "",
                goodsId: "",
                goodsNumber: "",
                ext: "",
                sign: ""
            }

            let strParam = JSON.stringify(param);
            Http.post("http://47.104.85.224:3000/payment/egret/notify/", strParam, (e) => {
                var request = e.currentTarget;
                let data = JSON.parse(request.response);
                if (data.code == "200") {

                }
                console.log("post data : ", request.response);
            }, this);
        }
        else if (payInfo.result == -1) {
            //支付取消
        }
    }
}