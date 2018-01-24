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
 * 错误码管理
 * @author lucywang
 * @date 2017/10/19
 */
var ErrorCodeManager = (function (_super) {
    __extends(ErrorCodeManager, _super);
    function ErrorCodeManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.map = {};
        return _this;
    }
    Object.defineProperty(ErrorCodeManager, "Instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    ErrorCodeManager.prototype.init = function (url) {
        var _this = this;
        var str = RES.getRes(url);
        console.assert(str != "", "read file failed");
        str.replace(/\r/g, "");
        var allData = str.split("\n");
        allData.forEach(function (element) {
            if (element.indexOf(":") != -1) {
                var oneData = element.split(":");
                _this.map[oneData[0]] = oneData[1];
            }
        });
    };
    ErrorCodeManager.prototype.getErrorCode = function (code) {
        var msg = this.map[code];
        return msg || "code not found" + code;
    };
    return ErrorCodeManager;
}(Single));
__reflect(ErrorCodeManager.prototype, "ErrorCodeManager");
//# sourceMappingURL=ErrorCodeManager.js.map