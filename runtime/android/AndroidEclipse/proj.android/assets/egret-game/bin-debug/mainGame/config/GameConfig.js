var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 游戏的配置
 * @author lucywang
 * @date 2018/01/11
 */
var GameConfig = (function () {
    function GameConfig() {
    }
    GameConfig.default_res_json = "resource/default.res.json";
    GameConfig.default_thm_json = "resource/default.thm.json";
    GameConfig.default_resource = "resource/";
    return GameConfig;
}());
__reflect(GameConfig.prototype, "GameConfig");
//# sourceMappingURL=GameConfig.js.map