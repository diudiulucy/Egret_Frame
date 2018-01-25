var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 控制器基类
 * @author lucywang
 * @date 2018/01/25
 */
var Controller = (function () {
    function Controller() {
        this.TAG = "";
    }
    return Controller;
}());
__reflect(Controller.prototype, "Controller");
//# sourceMappingURL=Controller.js.map