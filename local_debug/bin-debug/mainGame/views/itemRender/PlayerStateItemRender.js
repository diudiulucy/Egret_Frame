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
var PlayerStateItemRender = (function (_super) {
    __extends(PlayerStateItemRender, _super);
    function PlayerStateItemRender() {
        return _super.call(this) || this;
        // this.usernameTxt = new eui.Label();
        // this.usernameTxt.left = 10;
        // this.addChild(this.usernameTxt);
        // this.onlineTxt = new eui.Label();
        // this.onlineTxt.right = 10;
        // this.addChild(this.onlineTxt);
        // this.height = 80;
    }
    PlayerStateItemRender.prototype.dataChanged = function () {
        this.usernameTxt.text = this.data.username;
        this.onlineTxt.text = this.data.online == true ? "在线" : "离线";
    };
    return PlayerStateItemRender;
}(eui.ItemRenderer));
__reflect(PlayerStateItemRender.prototype, "PlayerStateItemRender");
//# sourceMappingURL=PlayerStateItemRender.js.map