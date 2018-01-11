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
var LoginScene = (function (_super) {
    __extends(LoginScene, _super);
    function LoginScene() {
        return _super.call(this) || this;
    }
    LoginScene.prototype.init = function () {
        _super.prototype.init.call(this);
        var loginLayer = new LoginLayer();
        this.addChild(loginLayer);
    };
    return LoginScene;
}(Scene));
__reflect(LoginScene.prototype, "LoginScene");
//# sourceMappingURL=LoginScene.js.map