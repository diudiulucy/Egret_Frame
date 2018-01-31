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
var GameLayer = (function (_super) {
    __extends(GameLayer, _super);
    // private edit_name: eui.EditableText;
    // private edit_psw: eui.EditableText;
    // private btn_login: eui.Button;
    function GameLayer() {
        var _this = _super.call(this) || this;
        // this.skinName = "skins.LoginLayer";
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
    }
    GameLayer.prototype.init = function () {
        _super.prototype.init.call(this);
        // FrameManager.Instance.addFrame(this, this.dosomething, this);
    };
    GameLayer.prototype.setOnTouchListener = function () {
        // this.btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginClick, this);
    };
    GameLayer.prototype.removeOnTouchListener = function () {
        // this.btn_login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginClick, this);
    };
    return GameLayer;
}(Layer));
__reflect(GameLayer.prototype, "GameLayer");
//# sourceMappingURL=GameLayer.js.map