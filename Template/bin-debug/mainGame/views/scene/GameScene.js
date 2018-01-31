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
 * 游戏场景
 * @author lucywang
 * @date 2018/01/05
 */
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super.call(this) || this;
    }
    GameScene.prototype.init = function () {
        _super.prototype.init.call(this);
        var gameLayer = new GameLayer();
        this.addChild(gameLayer);
    };
    GameScene.prototype.onExitAnimation = function () {
        // egret.Tween.get(this).wait(300).to({x:this.stage.width }, 600, egret.Ease.cubicOut);
    };
    return GameScene;
}(Scene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map