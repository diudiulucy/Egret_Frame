/**
 * 场景管理类(全局唯一管理场景的地方)控制游戏场景流程的切换
 * @author lucywang
 * @date 2018/01/05
 */

class SceneManager extends Single {
    private _runningScene: Scene = null;
    private _scenesStack: Array<Scene> = [];
    private _nextScene: Scene = null;
    private _sendCleanupToScene: boolean;

    //为方便提示，加入此接口
    public static get Instance(): SceneManager {
        return this.getInstance();
    }

    //启动游戏，并运行scene场景。本方法在主程序第一次启动主场景的时候调用。如果已有正在运行的场景则不能调用该方法；会调用pushScene-->startAnimation。
    public runWithScene(sceneName: string) {
        console.assert(sceneName != null, "This command can only be used to start the SceneManager. There is already a scene present.");
        console.assert(this._runningScene == null, "_runningScene should be null");

        this.pushScene(sceneName);

    }

    //直接使用传入的scene替换当前场景来切换画面，当前场景被释放。这是切换场景时最常用的方法。
    public replaceScene(sceneName: string) {
        console.assert(sceneName != null, "the scene should not be null");
        if (this._runningScene == null) {
            this.runWithScene(sceneName);
            return;
        }

        let cls = egret.getDefinitionByName(sceneName);
        let scene = new cls();

        if (scene == this._nextScene)
            return;

        if (this._nextScene) {
            if (this._nextScene.isRunning) {
                this._nextScene.parent.removeChild(this._nextScene);
            }

            this._nextScene = null;
        }

        this._sendCleanupToScene = true;

        let len = this._scenesStack.length;
        this._scenesStack.splice(len - 1, 1, scene);

        this._nextScene = scene;
        this._setNextScene();
    }

    //将当前运行中的场景暂停并压入到代码执行场景栈中，再将传入的scene设置为当前运行场景，只有存在正在运行的场景时才调用该方法；
    public pushScene(sceneName: string) {
        console.assert(sceneName != null, "the scene should not null");
        this._sendCleanupToScene = false;

        let cls = egret.getDefinitionByName(sceneName);
        let scene = new cls();
        this._scenesStack.push(scene);
        this._nextScene = scene;
        this._setNextScene();
    }


    //释放当前场景，再从代码执行场景中弹出栈顶的场景，并将其设置为当前运行场景。如果栈为空，直接结束应用。和PushScene结对使用
    public popScene() {
        console.assert(this._runningScene != null, "running scene should not null");
        this._scenesStack.pop();
        let len = this._scenesStack.length;
        if (len == 0) {
            //结束程序
        } else {
            this._sendCleanupToScene = true;
            this._nextScene = this._scenesStack[len - 1];
            this._setNextScene();
        }
    }

    private _setNextScene() {
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
    }

    public get runningScene() {
        return this._runningScene;
    }
}