var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * @author lucywang
 * @date 2018/01/29
 */
var SoEasySdk = (function () {
    function SoEasySdk() {
        this._Authorization = "ZW1tLWx1b3lhbnBpbmcteW91Y2FuZ3Vlc3N0aGlzLTE3NTA3";
    }
    SoEasySdk.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    SoEasySdk.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("start SoEasySdk init");
                loadSingleScript("https://cn.soeasysdk.com/soeasysr/zm_engine_v2.js", function () {
                    console.log("enenenen");
                });
                return [2 /*return*/];
            });
        });
    };
    SoEasySdk.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("login start");
                return [2 /*return*/];
            });
        });
    };
    SoEasySdk.prototype.payOrder = function (gid) {
        return __awaiter(this, void 0, void 0, function () {
            var param;
            return __generator(this, function (_a) {
                param = JSON.stringify({ gid: gid, Authorization: this._Authorization, 'channel': 'soeasy' });
                Http.post("http://47.104.85.224:3000/shop/gift/buy/", param, this.payOrderHandler, this);
                return [2 /*return*/];
            });
        });
    };
    ;
    /**
     * 下订单回调
     */
    SoEasySdk.prototype.payOrderHandler = function (e) {
        var request = e.currentTarget;
        var result = JSON.parse(request.response);
        console.log("return payOrderHandler : ", result);
        var data = result.data;
        if (result.code == 200) {
            //唤起支付
            platform.pay(result.data);
        }
    };
    SoEasySdk.prototype.pay = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var payinfojson;
            return __generator(this, function (_a) {
                payinfojson = {
                    feeid: data.feeid,
                    fee: data.fee,
                    feename: data.feename,
                    extradata: data.extradata,
                    // serverid: "1",
                    check: data.check,
                };
                console.log("pay param : ", payinfojson);
                ZmSdk.getInstance().pay(payinfojson, function (data) {
                    console.log(data.retcode + " easysdk pay");
                    if (data.retcode === "0") {
                    }
                    else if (data.retcode === "1") {
                        //购买失败处理
                    }
                    else if (data.retcode === "2") {
                        //初购取消
                    }
                    else if (data.retcode === "3") {
                        // 跳转到了支付界面或渠道不支持
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    return SoEasySdk;
}());
__reflect(SoEasySdk.prototype, "SoEasySdk", ["Platform"]);
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
                var param = JSON.stringify({
                    uid: userinfo.userdata.uid,
                    t: userinfo.userdata.t,
                    sign: userinfo.userdata.sign,
                    common: userinfo.common
                });
                // let commonobj = JSON.parse(userinfo.common);
                console.log("send ", param);
                Http.post("http://47.104.85.224:3000/user/login/soeasy/", param, function (e) {
                    var request = e.currentTarget;
                    var data = JSON.parse(request.response);
                    console.log("_onLoginHandler : ", data);
                    if (data.code == "200") {
                        SceneManager.Instance.replaceScene(SceneConst[SceneConst.HallScene]);
                    }
                }, this);
            }
            else if (data.retcode === "1") {
                //初始化失败处理
            }
        });
    };
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
//# sourceMappingURL=SoEasySdk.js.map