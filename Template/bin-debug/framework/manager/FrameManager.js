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
 *
 * 帧管理器
 * @author lucywang
 * @date 2018/01/18
 */
var FrameManager = (function (_super) {
    __extends(FrameManager, _super);
    //构造函数必须私有
    function FrameManager() {
        var _this = _super.call(this) || this;
        _this._funsArray = [];
        _this._funDic = {};
        var stage = egret.MainContext.instance.stage;
        stage.addEventListener(egret.Event.ENTER_FRAME, _this._loopHandler, _this);
        return _this;
    }
    Object.defineProperty(FrameManager, "Instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    FrameManager.prototype._loopHandler = function () {
        this._doFrame();
    };
    /**
     * 遍历所有的行为帧
     */
    FrameManager.prototype._doFrame = function () {
        var arr = this._funsArray;
        if (arr.length == 0)
            return;
        for (var i = arr.length - 1; i >= 0; i--) {
            var handler = arr[i];
            if (handler && handler.method) {
                handler.method.call(handler.thisObj);
            }
        }
    };
    /**
     * 添加帧
     */
    FrameManager.prototype.addFrame = function (key, func, thisObj) {
        if (!this._funDic[key]) {
            var handler = new Handler(func, thisObj);
            this._funDic[key] = handler;
            this._funsArray.push(handler);
        }
    };
    /**
     * 删除帧
     */
    FrameManager.prototype.removeFrame = function (key) {
        var handler = this._funDic[key];
        if (!handler)
            return;
        var arr = this._funsArray;
        if (arr.length == 0)
            return;
        var index = arr.indexOf(handler);
        if (index != -1) {
            arr.splice(index, 1);
            handler.dispose();
            this._funDic[key] = null;
            delete this._funDic[key];
        }
    };
    return FrameManager;
}(Single));
__reflect(FrameManager.prototype, "FrameManager");
//# sourceMappingURL=FrameManager.js.map