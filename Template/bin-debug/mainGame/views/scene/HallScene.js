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
        //  egret.Tween.get(this).to({x:this.stage.width}, 0).to({x:0 }, 600, egret.Ease.cubicOut);
    };
    return HallScene;
}(Scene));
__reflect(HallScene.prototype, "HallScene");
//# sourceMappingURL=HallScene.js.map