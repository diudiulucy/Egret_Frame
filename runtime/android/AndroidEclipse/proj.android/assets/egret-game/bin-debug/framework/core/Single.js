var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 单例类
 * @author lucywang
 * @date 2017/10/19
 */
var Single = (function () {
    //构造函数必须保护型才算真正的单例,这里子类要访问所以是保护类型，严格的得用私有
    function Single() {
    }
    Single.getInstance = function () {
        var clsName = egret.getQualifiedClassName(this);
        var cls = egret.getDefinitionByName(clsName);
        if (!this._instance) {
            this._instance = new cls();
        }
        return this._instance;
    };
    return Single;
}());
__reflect(Single.prototype, "Single");
//# sourceMappingURL=Single.js.map