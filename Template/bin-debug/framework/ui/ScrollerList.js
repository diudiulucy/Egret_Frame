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
var ScrollerList = (function (_super) {
    __extends(ScrollerList, _super);
    function ScrollerList() {
        var _this = _super.call(this) || this;
        _this._list = new eui.List();
        _this._scroller = new eui.Scroller();
        _this._scroller.bounces = false;
        _this._scroller.viewport = _this._list;
        _this.addChild(_this._scroller);
        _this.addEventListener(egret.Event.RESIZE, _this._onResize, _this);
        _this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, _this._onItemTap, _this);
        return _this;
    }
    ScrollerList.prototype._onResize = function () {
        this._scroller.width = this.width;
        this._scroller.height = this.height;
    };
    ScrollerList.prototype._onItemTap = function (event) {
        this.dispatchEvent(event);
    };
    Object.defineProperty(ScrollerList.prototype, "dataProvider", {
        get: function () {
            return this._list.dataProvider;
        },
        set: function (dp) {
            this._list.dataProvider = dp;
            this.addEventListener(egret.Event.ENTER_FRAME, this._onEnterFrame, this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollerList.prototype, "itemRender", {
        get: function () {
            return this._list.itemRenderer;
        },
        set: function (ir) {
            this._list.itemRenderer = ir;
            this.addEventListener(egret.Event.ENTER_FRAME, this._onEnterFrame, this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollerList.prototype, "itemRendererSkinName", {
        get: function () {
            return this._list.itemRendererSkinName;
        },
        set: function (value) {
            this._list.itemRendererSkinName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollerList.prototype, "selectedIndex", {
        get: function () {
            return this._list.selectedIndex;
        },
        set: function (value) {
            this._list.selectedIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollerList.prototype, "selectedItem", {
        get: function () {
            return this._list.selectedItem;
        },
        set: function (value) {
            this._list.selectedItem = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollerList.prototype, "allowMultipleSelection", {
        get: function () {
            return this._list.allowMultipleSelection;
        },
        set: function (value) {
            this._list.allowMultipleSelection = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollerList.prototype, "selectedIndices", {
        get: function () {
            return this._list.selectedIndices;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollerList.prototype, "useVirtualLayout", {
        get: function () {
            return this._list.useVirtualLayout;
        },
        set: function (v) {
            this._list.useVirtualLayout = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollerList.prototype, "layout", {
        get: function () {
            return this._list.layout;
        },
        set: function (value) {
            this._list.layout = value;
        },
        enumerable: true,
        configurable: true
    });
    ScrollerList.prototype.getTileLayout = function () {
        return new eui.TileLayout;
    };
    ScrollerList.prototype.getVerticalLayout = function () {
        return new eui.VerticalLayout;
    };
    ScrollerList.prototype._onEnterFrame = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this._onEnterFrame, this);
        this._onResize();
        var dp = this._list.dataProvider;
        var noDataTxt = this._doDateTxt;
        if (dp && dp.length == 0) {
            if (!noDataTxt) {
                noDataTxt = this._doDateTxt = new eui.Label("目前列表为空");
                noDataTxt.size = 18;
                this.addChild(noDataTxt);
                noDataTxt.horizontalCenter = 0;
                noDataTxt.verticalCenter = 0;
            }
        }
        if (noDataTxt) {
            noDataTxt.visible = (dp.length == 0);
        }
    };
    return ScrollerList;
}(eui.Component));
__reflect(ScrollerList.prototype, "ScrollerList");
//# sourceMappingURL=ScrollerList.js.map