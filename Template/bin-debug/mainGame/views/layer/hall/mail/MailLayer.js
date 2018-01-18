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
var MailLayer = (function (_super) {
    __extends(MailLayer, _super);
    function MailLayer() {
        var _this = _super.call(this) || this;
        _this.skinName = "skins.Mail";
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
    }
    MailLayer.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    MailLayer.prototype.setOnTouchListener = function () {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onCloseClick, this);
    };
    MailLayer.prototype.removeOnTouchListener = function () {
        this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onCloseClick, this);
    };
    MailLayer.prototype._onCloseClick = function () {
        PopupManager.Instance.close(PopUpLayers[PopUpLayers.MailLayer], EffectType.Slight);
    };
    return MailLayer;
}(Layer));
__reflect(MailLayer.prototype, "MailLayer");
//# sourceMappingURL=MailLayer.js.map