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
 * @author lucywang
 * @date 2018/01/04
 */
var TabStackView = (function (_super) {
    __extends(TabStackView, _super);
    function TabStackView() {
        return _super.call(this) || this;
    }
    return TabStackView;
}(eui.Component));
__reflect(TabStackView.prototype, "TabStackView");
//# sourceMappingURL=TabStackView.js.map