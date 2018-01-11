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
 * 层级类,只处理UI上的逻辑(一个layer对应一个controller,处理和后端的交互)
 * @author lucywang
 * @date 2017/01/09
 */
var Layer = (function (_super) {
    __extends(Layer, _super);
    function Layer() {
        var _this = _super.call(this) || this;
        _this.TAG = "";
        _this.CustomUIEventList = null;
        _this.TAG = egret.getQualifiedClassName(_this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onDestroy, _this);
        return _this;
    }
    Layer.prototype.init = function () {
        console.log(this.TAG + " init");
        this._registerCustomUIEventsList(true);
        this.setOnTouchListener();
        this.watchData();
    };
    /**
      * 进行数据的监视
      */
    Layer.prototype.watchData = function () {
    };
    Layer.prototype._registerCustomUIEventsList = function (isRegister) {
        if (!this.CustomUIEventList)
            return;
        for (var _i = 0, _a = this.CustomUIEventList; _i < _a.length; _i++) {
            var value = _a[_i];
            var eventName = value.toString();
            var funcName = "ui_" + eventName;
            if (this[funcName]) {
                if (isRegister) {
                    EventManager.getInstance().register(eventName, this[funcName], this);
                }
                else {
                    EventManager.getInstance().unRegister(eventName, this[funcName], this);
                }
            }
            else {
                console.error("\u672A\u6DFB\u52A0" + this.TAG + "\u7684" + funcName + "\u7684\u76D1\u542C");
            }
        }
    };
    // 触摸消息的注册全在这里操作
    Layer.prototype.setOnTouchListener = function () {
        // console.log(this.TAG + " setOnTouchListener");
    };
    Layer.prototype.removeOnTouchListener = function () {
        // console.log(this.TAG + " removeOnTouchListener");
    };
    Layer.prototype.onDestroy = function () {
        console.log(this.TAG + " onDestroy");
        this._registerCustomUIEventsList(false);
        this.removeOnTouchListener();
        this.CustomUIEventList = null;
    };
    return Layer;
}(eui.Component));
__reflect(Layer.prototype, "Layer");
//# sourceMappingURL=Layer.js.map