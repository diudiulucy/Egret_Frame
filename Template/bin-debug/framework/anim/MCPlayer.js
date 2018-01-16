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
 * 序列帧动画播放,可以在编辑器中设置mclink的属性即可绑定，不会立即刷新，只有在运行的时候才会刷新
 * @author lucywang
 * @date 2018/01/16
 *
 */
var MCPlayer = (function (_super) {
    __extends(MCPlayer, _super);
    function MCPlayer() {
        return _super.call(this) || this;
    }
    MCPlayer.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this._mc = new egret.MovieClip();
        this._mc.movieClipData = this._mcDataFactory.generateMovieClipData(this._mcLink);
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.horizontalCenter = 0;
        this.verticalCenter = 0;
        this.addChild(this._mc);
        this.play(-1);
    };
    Object.defineProperty(MCPlayer.prototype, "MC", {
        get: function () {
            return this._mc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MCPlayer.prototype, "mcLink", {
        get: function () {
            return this._mcLink;
        },
        set: function (value) {
            this._mcLink = value;
            var data = RES.getRes(value + "_mc_json");
            var texture = RES.getRes(value + "_tex_png");
            this._mcDataFactory = new egret.MovieClipDataFactory(data, texture);
        },
        enumerable: true,
        configurable: true
    });
    MCPlayer.prototype.stop = function () {
        this._mc && this._mc.stop();
    };
    MCPlayer.prototype.play = function (playtimes) {
        this._mc && this._mc.play(playtimes);
    };
    return MCPlayer;
}(eui.Component));
__reflect(MCPlayer.prototype, "MCPlayer");
//# sourceMappingURL=MCPlayer.js.map