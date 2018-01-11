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
    /**打开窗口 */
    PopupManager.prototype.open = function (layerName, dark, effectType) {
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
        this._playEffect(layer, effectType);
    };
    PopupManager.prototype._playEffect = function (element, type) {
        switch (type) {
            case EffectType.None:
                break;
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
        }
    };
    PopupManager.prototype.close = function (layerName, effectType) {
        var scene = SceneManager.Instance.runningScene;
        if (!layerName && !scene.contains(this._popUpLayerList[layerName]))
            return;
        var element = this._popUpLayerList[layerName];
        //以下是弹窗动画
        switch (effectType) {
            case 0:
                break;
            case 1:
                egret.Tween.get(element).to({ alpha: 0, scaleX: 0, scaleY: 0, x: element.x + element.width / 2, y: element.y + element.height / 2 }, 300);
                break;
            case 2:
                break;
            case 3:
                egret.Tween.get(element).to({ x: element.width }, 500, egret.Ease.cubicOut);
                break;
            case 4:
                egret.Tween.get(element).to({ x: -element.width }, 500, egret.Ease.cubicOut);
                break;
            case 5:
                egret.Tween.get(element).to({ y: element.height }, 500, egret.Ease.cubicOut);
                break;
            case 6:
                egret.Tween.get(element).to({ y: -element.height }, 500, egret.Ease.cubicOut);
                break;
            default:
                break;
        }
        var waitTime = 500;
        if (effectType == 0) {
            waitTime = 0;
        }
        egret.setTimeout(function () {
            if (element && scene.contains(element)) {
                scene.removeChild(element);
                this._popUpLayerList[layerName] = null;
                delete this._popUpLayerList[layerName];
            }
        }, this, waitTime);
    };
    return PopupManager;
}(Single));
__reflect(PopupManager.prototype, "PopupManager");
//# sourceMappingURL=PopupManager.js.map