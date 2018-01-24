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
/**
 * 面板弹出的管理类
 * @author lucywang
 * @date 2018/01/10
 */
var EffectType;
(function (EffectType) {
    EffectType[EffectType["None"] = 0] = "None";
    EffectType[EffectType["Slight"] = 1] = "Slight";
    EffectType[EffectType["Violent"] = 2] = "Violent";
    EffectType[EffectType["LeftRigt"] = 3] = "LeftRigt";
    EffectType[EffectType["RightLeft"] = 4] = "RightLeft";
    EffectType[EffectType["UpDown"] = 5] = "UpDown";
    EffectType[EffectType["DownUp"] = 6] = "DownUp"; //从上到下
})(EffectType || (EffectType = {}));
var PopupManager = (function (_super) {
    __extends(PopupManager, _super);
    function PopupManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._popUpLayerList = {};
        return _this;
    }
    Object.defineProperty(PopupManager, "Instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 打开窗口
     *
     */
    PopupManager.prototype.open = function (layerName, effectType, dark) {
        if (effectType === void 0) { effectType = EffectType.None; }
        if (dark === void 0) { dark = false; }
        var scene = SceneManager.Instance.runningScene;
        //判断当前场景是否包含此layer，包含则返回
        if (scene.contains(this._popUpLayerList[layerName]))
            return;
        //创建layer
        var cls = egret.getDefinitionByName(layerName);
        var layer = new cls();
        scene.addChild(layer);
        this._popUpLayerList[layerName] = layer;
        dark && this._createDarkBg(layer);
        effectType != EffectType.None && this._playOpenEffect(layer, effectType);
    };
    /**
     * 关闭窗口
     *
     */
    PopupManager.prototype.close = function (layerName, effectType) {
        var scene = SceneManager.Instance.runningScene;
        if (!layerName && !scene.contains(this._popUpLayerList[layerName]))
            return;
        var callback = function () {
            if (element && scene.contains(element)) {
                scene.removeChild(element);
                this._popUpLayerList[layerName] = null;
                delete this._popUpLayerList[layerName];
            }
        };
        var element = this._popUpLayerList[layerName];
        this._playCloseEffect(element, effectType, callback);
    };
    PopupManager.prototype._createDarkBg = function (layer) {
        var width = egret.MainContext.instance.stage.width;
        var height = egret.MainContext.instance.stage.height;
        this._darkBg = new egret.Sprite();
        this._darkBg.graphics.clear();
        this._darkBg.graphics.beginFill(0x000000, 0.6);
        this._darkBg.graphics.drawRect(0, 0, width, height);
        this._darkBg.graphics.endFill();
        this._darkBg.width = width;
        this._darkBg.height = height;
        this._darkBg.visible = true;
        if (!layer.contains(this._darkBg)) {
            layer.addChildAt(this._darkBg, 0);
        }
        this._darkBg.touchEnabled = true;
        egret.Tween.get(this._darkBg).to({ alpha: 1 }, 150);
    };
    PopupManager.prototype._playOpenEffect = function (element, type) {
        switch (type) {
            case EffectType.Slight:
                element.alpha = 0;
                element.scaleX = 0.5;
                element.scaleY = 0.5;
                egret.Tween.get(element).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 300, egret.Ease.backOut);
                break;
            case EffectType.Violent:
                element.alpha = 0;
                element.scaleX = 0.5;
                element.scaleY = 0.5;
                egret.Tween.get(element).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
                break;
            case EffectType.LeftRigt:
                element.x = -egret.MainContext.instance.stage.width;
                egret.Tween.get(element).to({ x: 0 }, 500, egret.Ease.cubicOut);
                break;
            case EffectType.RightLeft:
                element.x = egret.MainContext.instance.stage.width;
                egret.Tween.get(element).to({ x: 0 }, 500, egret.Ease.cubicOut);
                break;
            case EffectType.UpDown:
                element.y = -egret.MainContext.instance.stage.height;
                egret.Tween.get(element).to({ y: 0 }, 500, egret.Ease.cubicOut);
                break;
            case EffectType.DownUp:
                element.y = egret.MainContext.instance.stage.height;
                egret.Tween.get(element).to({ y: 0 }, 500, egret.Ease.cubicOut);
                break;
        }
    };
    PopupManager.prototype._playCloseEffect = function (element, type, callback) {
        var onComplete = function () {
            if (element.contains(this.darkSprite)) {
                element.removeChild(this.darkSprite);
            }
        };
        if (this._darkBg) {
            egret.Tween.get(this._darkBg).to({ alpha: 0 }, 100).call(onComplete, this);
        }
        switch (type) {
            case EffectType.None:
                callback.call(this);
                break;
            case EffectType.Slight:
                egret.Tween.get(element).to({ alpha: 0, scaleX: 0, scaleY: 0 }, 500, egret.Ease.backOut).call(callback, this);
                break;
            case EffectType.Violent:
                egret.Tween.get(element).to({ alpha: 0, scaleX: 0, scaleY: 0 }, 300, egret.Ease.elasticOut).call(callback, this);
                break;
            case EffectType.LeftRigt:
                egret.Tween.get(element).to({ x: element.width }, 500, egret.Ease.cubicOut).call(callback, this);
                break;
            case EffectType.RightLeft:
                egret.Tween.get(element).to({ x: -element.width }, 500, egret.Ease.cubicOut).call(callback, this);
                break;
            case EffectType.UpDown:
                egret.Tween.get(element).to({ y: element.height }, 500, egret.Ease.cubicOut).call(callback, this);
                break;
            case EffectType.DownUp:
                egret.Tween.get(element).to({ y: -element.height }, 500, egret.Ease.cubicOut).call(callback, this);
                break;
        }
    };
    return PopupManager;
}(Single));
__reflect(PopupManager.prototype, "PopupManager");
//# sourceMappingURL=PopupManager.js.map