var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 针对回调方式封装的类
 * @author lucywang
 * @date 2018/01/18
 */
var Handler = (function () {
    function Handler(method, thisObj) {
        if (method === void 0) { method = null; }
        if (thisObj === void 0) { thisObj = null; }
        this.method = method;
        this.thisObj = thisObj;
    }
    Handler.prototype.dispose = function () {
        this.method = null;
        this.thisObj = null;
    };
    Handler.create = function (menthod, thisObj) {
        if (menthod === void 0) { menthod = null; }
        if (thisObj === void 0) { thisObj = null; }
        return new Handler(menthod, thisObj);
    };
    return Handler;
}());
__reflect(Handler.prototype, "Handler");
//# sourceMappingURL=Handler.js.map