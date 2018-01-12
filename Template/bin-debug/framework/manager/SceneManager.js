/**
 * 场景管理类(全局唯一管理场景的地方)控制游戏场景流程的切换
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
    //直接使用传入的scene替换当前场景来切换画面，当前场景被释放。这是切换场景时最常用的方法。
    SceneManager.prototype.replaceScene = function (sceneName) {
        console.assert(sceneName != null, "the scene should not be null");
        if (this._runningScene == null) {
            this.runWithScene(sceneName);
            return;
        }
        var cls = egret.getDefinitionByName(sceneName);
        var scene = new cls();
        if (scene == this._nextScene)
            return;
        if (this._nextScene) {
            if (this._nextScene.isRunning) {
                this._nextScene.parent.removeChild(this._nextScene);
            }
            this._nextScene = null;
        }
        this._sendCleanupToScene = true;
        var len = this._scenesStack.length;
        this._scenesStack.splice(len - 1, 1, scene);
        this._nextScene = scene;
        this._setNextScene();
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
    //释放当前场景，再从代码执行场景中弹出栈顶的场景，并将其设置为当前运行场景。如果栈为空，直接结束应用。和PushScene结对使用
    SceneManager.prototype.popScene = function () {
        console.assert(this._runningScene != null, "running scene should not null");
        this._scenesStack.pop();
        var len = this._scenesStack.length;
        if (len == 0) {
            //结束程序
        }
        else {
            this._sendCleanupToScene = true;
            this._nextScene = this._scenesStack[len - 1];
            this._setNextScene();
        }
    };
    SceneManager.prototype._setNextScene = function () {
        egret.MainContext.instance.stage.addChild(this._nextScene);
        if (this._runningScene) {
            this._runningScene.onExitAnimation();
        }
        this._nextScene.onEnterAnimation();
        if (this._sendCleanupToScene && this._runningScene) {
            this._runningScene.parent.removeChild(this._runningScene);
        }
        this._runningScene = this._nextScene;
        this._nextScene = null;
    };
    Object.defineProperty(SceneManager.prototype, "runningScene", {
        get: function () {
            return this._runningScene;
        },
        enumerable: true,
        configurable: true
    });
    return SceneManager;
}(Single));
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map