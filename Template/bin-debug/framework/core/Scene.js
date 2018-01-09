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
 * 场景基类(一个场景下可以加多个Layer或者其他的组件) 其子类不用关心销毁的操作 全在此类进行，销毁时移除所有的子节点以触发其相应的destory
 * 场景类中只处理UI的切换，不做协议的处理
 * @author lucywang
 * @date 2018/01/05
 */
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        _this.TAG = ""; //方便调试
        _this.TAG = egret.getQualifiedClassName(_this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onDestroy, _this);
        return _this;
    }
    /**
     * 场景被添加到舞台时调用, 进行一些初始化的操作
     */
    Scene.prototype.init = function () {
        console.log(this.TAG + " init");
        this._isRunning = true;
    };
    // 进入层而且过渡动画结束时调用           
    Scene.prototype.onEnterTransitionDidFinish = function () {
        // console.log(this.TAG + " onEnterTransitionDidFinish");
        // egret.Tween.get(this).to({x:this.stage.width*1.5 }, 0, egret.Ease.backInOut).to({x:0 }, 600, egret.Ease.sineInOut);
    };
    // 退出层而且开始过渡动画完成时调用       
    Scene.prototype.onExitTransitionDidStart = function () {
        // console.log(this.TAG + " onExitTransitionDidStart");
        // egret.Tween.get(this).to({x:-this.stage.width}, 0, egret.Ease.backInOut);
    };
    Scene.prototype.onDestroy = function () {
        console.log(this.TAG + " onDestroy");
        this.removeChildren(); //移除所有的子节点
    };
    return Scene;
}(eui.UILayer));
__reflect(Scene.prototype, "Scene");
//# sourceMappingURL=Scene.js.map