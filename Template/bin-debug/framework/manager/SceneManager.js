/**
 * 场景管理类(全局唯一管理场景的地方)控制游戏场景流程的切换 不用枚举来创建场景，避免过多依赖
 * @author lucywang
 * @date 2018/01/05
 */
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
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._runningScene = null;
        _this._scenesStack = [];
        _this._nextScene = null;
        return _this;
    }
    Object.defineProperty(SceneManager, "Instance", {
        //为方便提示，加入此接口
        get: function () {
            return this.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    //启动游戏，并运行scene场景。本方法在主程序第一次启动主场景的时候调用。如果已有正在运行的场景则不能调用该方法；会调用pushScene-->startAnimation。
    SceneManager.prototype.runWithScene = function (sceneName) {
        console.assert(sceneName != null, "This command can only be used to start the SceneManager. There is already a scene present.");
        console.assert(this._runningScene == null, "_runningScene should be null");
        this.pushScene(sceneName);
    };
    //将当前运行中的场景暂停并压入到代码执行场景栈中，再将传入的scene设置为当前运行场景，只有存在正在运行的场景时才调用该方法；
    SceneManager.prototype.pushScene = function (sceneName) {
        console.assert(sceneName != null, "the scene should not null");
        this._sendCleanupToScene = false;
        var cls = egret.getDefinitionByName(sceneName);
        var scene = new cls();
        this._scenesStack.push(scene);
        this._nextScene = scene;
        this._setNextScene();
    };
    SceneManager.prototype._setNextScene = function () {
        egret.MainContext.instance.stage.addChild(this._nextScene);
        if (this._runningScene) {
            this._runningScene.onExitTransitionDidStart();
        }
        this._nextScene.onEnterTransitionDidFinish();
        if (this._sendCleanupToScene && this._runningScene) {
            this._runningScene.parent.removeChild(this._runningScene);
        }
        this._runningScene = this._nextScene;
        this._nextScene = null;
    };
    return SceneManager;
}(Single));
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map