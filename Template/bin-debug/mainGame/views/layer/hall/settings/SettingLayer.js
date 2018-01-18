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
var SettingLayer = (function (_super) {
    __extends(SettingLayer, _super);
    function SettingLayer() {
        var _this = _super.call(this) || this;
        _this.skinName = "skins.SettingLayer";
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
    }
    SettingLayer.prototype.init = function () {
        _super.prototype.init.call(this);
        var viewArr = [this.tab1, this.tab2, this.tab3];
        this.about.addTabViews(viewArr);
        this.about.selectedIndex = 0;
    };
    SettingLayer.prototype.setOnTouchListener = function () {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onCloseClick, this);
    };
    SettingLayer.prototype.removeOnTouchListener = function () {
        this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onCloseClick, this);
    };
    SettingLayer.prototype._onCloseClick = function () {
        PopupManager.Instance.close(PopUpLayers[PopUpLayers.SettingLayer], EffectType.RightLeft);
    };
    return SettingLayer;
}(Layer));
__reflect(SettingLayer.prototype, "SettingLayer");
//# sourceMappingURL=SettingLayer.js.map