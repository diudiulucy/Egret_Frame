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
 * 大厅场景
 * @author lucywang
 * @date 2018/01/05
 */
var HallScene = (function (_super) {
    __extends(HallScene, _super);
    function HallScene() {
        return _super.call(this) || this;
    }
    HallScene.prototype.init = function () {
        var hallLayer = new HallLayer();
        this.addChild(hallLayer);
    };
    HallScene.prototype.onEnterAnimation = function () {
        // this.alpha = 0;
        // this.scaleX = 0.5;
        // this.scaleY = 0.5;
        // egret.Tween.get(this).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 600,egret.Ease.cubicOut);
    };
    return HallScene;
}(Scene));
__reflect(HallScene.prototype, "HallScene");
//# sourceMappingURL=HallScene.js.map