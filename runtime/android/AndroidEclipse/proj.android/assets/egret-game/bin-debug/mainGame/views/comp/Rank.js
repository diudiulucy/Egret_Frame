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
var Rank = (function (_super) {
    __extends(Rank, _super);
    function Rank() {
        return _super.call(this) || this;
    }
    Rank.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var itemArray = [];
        for (var i = 0; i < 100; i++) {
            var item = {};
            item.No = i;
            item.name = "lucy" + i;
            itemArray.push(item);
        }
        var layout = new eui.VerticalLayout();
        this.rankList.layout = layout;
        var arrcol = new eui.ArrayCollection(itemArray);
        this.rankList.dataProvider = arrcol;
    };
    return Rank;
}(eui.Component));
__reflect(Rank.prototype, "Rank");
//# sourceMappingURL=Rank.js.map