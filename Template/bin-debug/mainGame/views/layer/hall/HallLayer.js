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
var HallLayer = (function (_super) {
    __extends(HallLayer, _super);
    function HallLayer() {
        var _this = _super.call(this) || this;
        _this.skinName = "Skin.Hall";
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
    }
    HallLayer.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    HallLayer.prototype.setOnTouchListener = function () {
        this.player.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onItemTap, this);
        this.gameEntryList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onItemTap, this);
        this.menu_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onItemTap, this);
        this.virtuallayout.addEventListener(egret.Event.CHANGE, this._onChange, this);
        this.btn_new.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnNewClick, this);
    };
    HallLayer.prototype.removeOnTouchListener = function () {
        this.player.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onItemTap, this);
        this.gameEntryList.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onItemTap, this);
        this.menu_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onItemTap, this);
        this.virtuallayout.removeEventListener(egret.Event.CHANGE, this._onChange, this);
    };
    HallLayer.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var itemArray = [];
        for (var i = 0; i < 100; i++) {
            var item = {};
            item.name = i;
            item.price = 100 + i;
            itemArray.push(item);
        }
        this.virtual.text = this.player.useVirtualLayout == true ? "开启" : "关闭";
        var layout = this.player.getVerticalLayout();
        // let layout = this.player.getTileLayout();
        // layout.requestedColumnCount = 3;
        layout.horizontalAlign = eui.JustifyAlign.JUSTIFY;
        this.player.layout = layout;
        // this.player.itemRendererSkinName = "testRender";
        this.arrCol = new eui.ArrayCollection(itemArray);
        this.player.dataProvider = this.arrCol;
    };
    HallLayer.prototype._onChange = function (e) {
        this.virtuallayout.selected ? this.player.useVirtualLayout = true : this.player.useVirtualLayout = false;
        this.virtuallayout.selected ? this.virtual.text = "开启" : this.virtual.text = "关闭";
        console.log(this.virtual.text);
    };
    HallLayer.prototype._onItemTap = function (event) {
        console.log(event.itemIndex);
        // let shop = new ShopLayer();
        PopupManager.Instance.open(PopUpLayers[PopUpLayers.ShopLayer], false, EffectType.Violent);
        // this.addChild(shop);
    };
    HallLayer.prototype._onBtnNewClick = function () {
        // this.player.dataProvider = 
        // this.arrCol.source = [{ name: "daye", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" }];
        // this.itemArray.unshift({ name: "daye", price: "$2000" });
        // this.arrCol.addItemAt({name: "daye", price: "$2000"},0);
        // this.arrCol.replaceItemAt({name: "daye", price: "$2000"},10);
        // this.arrCol.removeItemAt(2);
        console.log(this.arrCol.getItemAt(0));
        var item = this.arrCol.getItemAt(0);
        console.log(this.arrCol.getItemIndex(item));
        // this.arrCol.replaceAll([{ name: "daye", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" }]);
    };
    return HallLayer;
}(Layer));
__reflect(HallLayer.prototype, "HallLayer");
//# sourceMappingURL=HallLayer.js.map