var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var LoginLayer = (function (_super) {
    __extends(LoginLayer, _super);
    function LoginLayer() {
        var _this = _super.call(this) || this;
        _this.skinName = "skins.LoginLayer";
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
    }
    LoginLayer.prototype.init = function () {
        _super.prototype.init.call(this);
        FrameManager.Instance.addFrame(this, this.dosomething, this);
    };
    LoginLayer.prototype.setOnTouchListener = function () {
        this.btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginClick, this);
    };
    LoginLayer.prototype.removeOnTouchListener = function () {
        this.btn_login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginClick, this);
    };
    LoginLayer.prototype.onLoginClick = function () {
        SceneManager.Instance.replaceScene(SceneConst[SceneConst.HallScene]);
        FrameManager.Instance.removeFrame(this);
        // platform.payOrder("6");
    };
    LoginLayer.prototype.dosomething = function () {
        console.log("执行帧调度");
    };
    return LoginLayer;
}(Layer));
__reflect(LoginLayer.prototype, "LoginLayer");
//# sourceMappingURL=LoginLayer.js.map