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
 * 动画库的封装
 * @author lucywang
 * @date 2018/01/16
 */
var AnimUtil = (function (_super) {
    __extends(AnimUtil, _super);
    function AnimUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AnimUtil, "Instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 循环执行多次动画的封装,透明度的变化
     * @param target 目标对象
     * @param duration 持续时间
     * @param repeat 重复次数
     */
    AnimUtil.prototype.doRepeatAnimation = function (target, duration, repeat) {
        if (repeat <= 0)
            return;
        console.log("执行次数" + repeat);
        function onComplete(obj, time) {
            var _this = this;
            egret.Tween.get(target).to({ alpha: 1 }, duration).call(function () {
                _this.doRepeatAnimation(obj, duration, time);
            }, this);
        }
        repeat = repeat - 1;
        egret.Tween.get(target).to({ alpha: 0 }, duration).call(onComplete, this, [target, repeat]);
    };
    return AnimUtil;
}(Single));
__reflect(AnimUtil.prototype, "AnimUtil");
//# sourceMappingURL=AnimUtil.js.map