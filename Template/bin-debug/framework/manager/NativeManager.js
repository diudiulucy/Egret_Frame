/**
 * 和原生通讯的管理器,防止建立很多全局函数导致命名冲突问题
 * @author lucywang
 * @date 2018/01/25
 *
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
/**
 * 原生注册的函数名称
 */
var NativeFunc;
(function (NativeFunc) {
    NativeFunc[NativeFunc["callNative"] = 0] = "callNative";
})(NativeFunc || (NativeFunc = {}));
var NativeManager = (function (_super) {
    __extends(NativeManager, _super);
    /**
     * 构造函数私有
     */
    function NativeManager() {
        var _this = _super.call(this) || this;
        _this._setNativeInterface();
        return _this;
    }
    Object.defineProperty(NativeManager, "Instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 注册所有原生的回调函数
     */
    NativeManager.prototype._setNativeInterface = function () {
        egret.ExternalInterface.addCallback("CallJS", this._callJS);
        //TODO 
    };
    NativeManager.prototype._callJS = function (msg) {
        console.log(msg);
    };
    /**
     * 调用原生的接口，权限为public
     */
    NativeManager.prototype.callNative = function (nativeFunc, value) {
        console.log(NativeFunc[nativeFunc]);
        egret.ExternalInterface.call(NativeFunc[nativeFunc], value);
    };
    return NativeManager;
}(Single));
__reflect(NativeManager.prototype, "NativeManager");
//# sourceMappingURL=NativeManager.js.map