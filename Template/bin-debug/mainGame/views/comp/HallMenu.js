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
 * 菜单栏
 * @author lucywang
 * @date 2017/10/19
 */
var HallMenu = (function (_super) {
    __extends(HallMenu, _super);
    function HallMenu() {
        return _super.call(this) || this;
    }
    HallMenu.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.menu_list.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onItemTap, this);
    };
    HallMenu.prototype._onItemTap = function (event) {
        console.log(event.itemIndex);
    };
    return HallMenu;
}(eui.Component));
__reflect(HallMenu.prototype, "HallMenu");
//# sourceMappingURL=HallMenu.js.map