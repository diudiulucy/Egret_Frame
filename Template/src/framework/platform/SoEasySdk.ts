/**
 * @author lucywang
 * @date 2018/01/29
 */
class SoEasySdk implements Platform {
    private _Authorization: string = "ZW1tLWx1b3lhbnBpbmcteW91Y2FuZ3Vlc3N0aGlzLTE3NTA3";
    async getUserInfo() {

    }

    async init() {
        console.log("start SoEasySdk init");
        loadSingleScript("https://cn.soeasysdk.com/soeasysr/zm_engine_v2.js", function () {
            console.log("enenenen");
        })
    }

    async login() {
        console.log("login start");

    }
    async payOrder(gid) {
        let param = JSON.stringify({ gid: gid, Authorization: this._Authorization, 'channel': 'soeasy' });
        Http.post("http://47.104.85.224:3000/shop/gift/buy/", param, this.payOrderHandler, this);
    };

    /**
	 * 下订单回调
	 */
    private payOrderHandler(e) {
        var request = e.currentTarget;
        let result = JSON.parse(request.response);
        console.log("return payOrderHandler : ", result);
        let data = result.data;
        if (result.code == 200) {
            //唤起支付
            platform.pay(result.data);
        }
    }

    async pay(data) {
        let payinfojson = {
            feeid: data.feeid,
            fee: data.fee,
            feename: data.feename,
            extradata: data.extradata,
            // serverid: "1",
            check: data.check,
        }
        console.log("pay param : ", payinfojson);
        ZmSdk.getInstance().pay(payinfojson, function (data) {
            console.log(data.retcode + " easysdk pay");
            if (data.retcode === "0") {

            } else if (data.retcode === "1") {
                //购买失败处理
            } else if (data.retcode === "2") {
                //初购取消
            } else if (data.retcode === "3") {
                // 跳转到了支付界面或渠道不支持
            }
        });
    }

}
declare let ZmSdk: any;

if (!window.zmInitSucc) {
    window.zmInitSucc = function () {
        console.log("cp start work");
        //TODO 必须在这里或者该方法调用之后进行 sdk 调用
        ZmSdk.getInstance().init(function (data) {
            //初始化成功之后调用其他 sdk 能力 如 获取用户信息、支付、角色上报、设置分/
            //享信息、分享等…
            //掌盟 SoEasy SDK 开发者帮助文档
            //示例：
            if (data.retcode === "0") {
                console.log("SoEasy初始化成功");
                var userinfo = ZmSdk.getInstance().getUserInfo();

                let param = JSON.stringify({
                    uid: userinfo.userdata.uid,
                    t: userinfo.userdata.t,
                    sign: userinfo.userdata.sign,
                    common:userinfo.common
                });

                // let commonobj = JSON.parse(userinfo.common);
                console.log("send ",param);
                Http.post("http://47.104.85.224:3000/user/login/soeasy/", param, (e) => {
                    var request = e.currentTarget;
                    let data = JSON.parse(request.response);
                    console.log("_onLoginHandler : ", data);
                    if (data.code == "200") {
                        SceneManager.Instance.replaceScene(SceneConst[SceneConst.HallScene]);
                    }
                }, this);

            } else if (data.retcode === "1") {
                //初始化失败处理
            }
        });
    };
}

declare let zmInitSucc: Function;

declare interface Window {

    zmInitSucc: Function
}

var loadSingleScript = function (src, callback) {
    var s = document.createElement('script');
    s.async = false;
    s.src = src;
    s.addEventListener('load', function () {
        s.parentNode.removeChild(s);
        // s.removeEventListener('load', arguments.callee, false);
        callback();
    }, false);
    document.body.appendChild(s);
};