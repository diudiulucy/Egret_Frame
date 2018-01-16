/**
 * 白鹭开放平台
 * @author lucywang
 * @date 2018/01/12
 * 
 */
class EgretPlatform implements Platform {
    private _appKey = "vfgYd3UV8hyKPRAwvw8nH";
    private _appId = 92068;
    private _Authorization: string = "ZW1tLWx1b3lhbnBpbmcteW91Y2FuZ3Vlc3N0aGlzLTE3NTA3";
    private _goodsNumber: string = "1";
    private _ext: string = "";
    private _serverId: string = "1";
    private _intervalDuration = 1000;
    private _orderId;
    private _intervalId: number;
    
    async getUserInfo() {
        return { nickName: "username" }
    }

    async init() {
        console.log("start nest init");
        let info: any = {};
        info.egretAppId = this._appId;
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

    /**
     * 下订单
     */
    async payOrder(gid) {
        let param = JSON.stringify({ gid: gid, Authorization: this._Authorization });
        Http.post("http://47.104.85.224:3000/shop/gift/buy/", param, this.payOrderHandler, this);
    };

    async pay(goodsId) {
        let payInfo: nest.iap.PayInfo = {
            goodsId: goodsId,
            goodsNumber: this._goodsNumber,
            serverId: this._serverId,
            ext: this._ext,
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
                console.log("_onLoginHandler : ", data);
                if (data.code == "200") {
                    // SceneManager.Instance.replaceScene(SceneConst[SceneConst.HallScene]);
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
        console.log("return payOrderHandler : ", result);
        let data = result.data;
        if (result.code == "200") {
            //唤起支付
            this._orderId = data.order_id;
            console.log("订单号：",this._orderId)
            platform.pay(result.data.product_id);
        }
    }

    private _onPayHandler(payInfo: nest.iap.PayCallbackInfo): void {
        console.log(payInfo);
        if (payInfo.result == 0) {
            //支付成功，通知发货
            this._intervalId = egret.setInterval(this._checkOrderHandler, this, this._intervalDuration);
        }
        else if (payInfo.result == -1) {
            //支付取消
        }
    }

    /**
     * 查询订单是否支付成功
     */
    private _checkOrderHandler() {
        let param = JSON.stringify({ order_id: this._orderId, Authorization: this._Authorization });
        Http.post("http://47.104.85.224:3000/user/pay/status/ ", param, (e) => {
            var request = e.currentTarget;
            let data = JSON.parse(request.response);
            console.log("_checkOrderHandler : ", data);
            if (data.code == "200") {
                egret.clearInterval(this._intervalId);
                this._RefreshUserData();
            }
        }, this);
    }

    /**
     *  刷新用户数据
     */
    private _RefreshUserData() {
        let param = JSON.stringify({ Authorization: this._Authorization });
        Http.post("http://47.104.85.224:3000/user/pay/status/ ", param, (e) => {
            var request = e.currentTarget;
            let data = JSON.parse(request.response);
            console.log("_RefreshUserData : ", data);
            if (data.code == "200") {

            }
        }, this);
    }
}