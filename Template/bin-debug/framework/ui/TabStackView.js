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
        var _this = _super.call(this) || this;
        _this._init();
        return _this;
    }
    TabStackView.prototype._init = function () {
        this._TabViewGroup = new eui.Group();
        this._TabViewGroup.layout = this.getVerticalLayout();
        this.addChild(this._TabViewGroup);
        this._tabBar = new eui.TabBar();
        this._TabViewGroup.addChild(this._tabBar);
        this._viewStackGroup = new eui.Group();
        this._TabViewGroup.addChild(this._viewStackGroup);
        this._viewStack = new eui.ViewStack();
        this._tabBar.dataProvider = this._viewStack;
        this._viewStackGroup.addChild(this._viewStack);
    };
    TabStackView.prototype.addTabViews = function (views) {
        views.forEach(function (item, index, input) {
            this._viewStack.addChild(item);
        }, this);
    };
    Object.defineProperty(TabStackView.prototype, "itemRendererSkinName", {
        get: function () {
            return this._tabBar.itemRendererSkinName;
        },
        set: function (value) {
            this._tabBar.itemRendererSkinName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabStackView.prototype, "viewWidth", {
        set: function (value) {
            this._viewStack.width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabStackView.prototype, "viewHeight", {
        set: function (value) {
            this._viewStack.height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabStackView.prototype, "stackViewBg", {
        set: function (src) {
            var img = new eui.Image();
            img.source = RES.getRes(src);
            img.percentWidth = 100;
            img.percentHeight = 100;
            img.scale9Grid = new egret.Rectangle(42, 47, 88, 71);
            this._viewStackGroup.addChildAt(img, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabStackView.prototype, "selectedIndex", {
        get: function () {
            return this._viewStack.selectedIndex;
        },
        set: function (value) {
            this._viewStack.selectedIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabStackView.prototype, "tabLayout", {
        get: function () {
            return this._tabBar.layout;
        },
        set: function (value) {
            this._tabBar.layout = value;
        },
        enumerable: true,
        configurable: true
    });
    TabStackView.prototype.getTileLayout = function () {
        return new eui.TileLayout;
    };
    TabStackView.prototype.getVerticalLayout = function () {
        return new eui.VerticalLayout;
    };
    return TabStackView;
}(eui.Component));
__reflect(TabStackView.prototype, "TabStackView");
//# sourceMappingURL=TabStackView.js.map