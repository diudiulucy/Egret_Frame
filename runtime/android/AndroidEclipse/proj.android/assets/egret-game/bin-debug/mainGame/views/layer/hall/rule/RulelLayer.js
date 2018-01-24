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
var RulelLayer = (function (_super) {
    __extends(RulelLayer, _super);
    function RulelLayer() {
        var _this = _super.call(this) || this;
        _this.skinName = "skins.RuleLayer";
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
    }
    RulelLayer.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    RulelLayer.prototype.setOnTouchListener = function () {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onCloseClick, this);
    };
    RulelLayer.prototype.removeOnTouchListener = function () {
        this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onCloseClick, this);
    };
    RulelLayer.prototype._onCloseClick = function () {
        PopupManager.Instance.close(PopUpLayers[PopUpLayers.RulelLayer], EffectType.Slight);
    };
    return RulelLayer;
}(Layer));
__reflect(RulelLayer.prototype, "RulelLayer");
//# sourceMappingURL=RulelLayer.js.map