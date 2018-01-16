/**
 * 场景基类(一个场景下可以加多个Layer或者其他的组件) 其子类不用关心销毁的操作 全在此类进行，销毁时移除所有的子节点以触发其相应的destory
 * 场景类中只处理UI的切换，不做协议的处理
 * @author lucywang
 * @date 2018/01/05
 */
class Scene extends eui.UILayer {
    protected TAG: string = "";         //方便调试
    private _isRunning: boolean;

    public constructor() {
        super();
        this.TAG = egret.getQualifiedClassName(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onDestroy, this);
    }

    /**
	 * 场景被添加到舞台时调用, 进行一些初始化的操作
	 */
    protected init() {
        console.log(this.TAG + " init");
        this._isRunning = true;
    }

    /**
     * 场景是否在运行
     * @return boolean true表示正在运行，falseb表示没有运行
    */
    public get isRunning(): boolean {
        return this._isRunning;
    }

    // 进入层动画       
    public onEnterAnimation() {
        console.log(this.TAG + " onEnterAnimation");
    }


    // 退出层动画完  
    public onExitAnimation() {
        console.log(this.TAG + " onExitAnimation");
        // egret.Tween.get(this).to({x:-this.stage.width}, 0, egret.Ease.backInOut);
    }

    protected onDestroy() {
        console.log(this.TAG + " onDestroy");
        this.removeChildren();//移除所有的子节点
    }


}