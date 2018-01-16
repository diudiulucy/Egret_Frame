//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.configList = ["fireworks", "fire", "sun", "jellyfish"];
        _this.configIndex = -1;
        _this.textureList = ["blood", "star", "energy", "magic"];
        _this.textureIndex = 0;
        return _this;
        // private onLoadComplete(event: egret.Event) {
        //     egret.log("onLoadComplete");
        //     var loader: egret.URLLoader = <egret.URLLoader>event.target;
        //     //获取加载到的纹理对象
        //     var texture: egret.Texture = <egret.Texture>loader.data;
        //     egret.log(texture);
        //     let a = new eui.Image();
        //     a.texture = texture;
        //     this.addChild(a);
        // }
        // private onLoadError() {
        // }
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, platform.init()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig(GameConfig.default_res_json, GameConfig.default_resource)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme(GameConfig.default_thm_json, _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        var imgBg = document.getElementById("bgImg");
        imgBg.parentNode.removeChild(imgBg);
        // SceneManager.Instance.runWithScene(SceneConst[SceneConst.LoginScene]);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.changeEffect();
        // egret.ImageLoader.crossOrigin = "anonymous";
        // let loader: egret.URLLoader = new egret.URLLoader();
        // loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        // loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        // loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
        // let url =  "image/head_01.png";
        // let request = new egret.URLRequest(url);
        // loader.load(request);
        // var requestParams: any = {
        //     gid:"6",
        //     Authorization:"ZW1tLWx1b3lhbnBpbmcteW91Y2FuZ3Vlc3N0aGlzLTE3NTA3"
        // };
        // let urlLoader = new egret.URLLoader();
        // let vari = new egret.URLVariables();
        // vari.variables = requestParams;
        // let request = new egret.URLRequest();
        // request.url = "http://47.104.85.224:3000/shop/gift/buy/";
        // request.method = egret.URLRequestMethod.POST;
        // request.data = vari;
        // urlLoader.load(request);
        // urlLoader.addEventListener(egret.Event.COMPLETE, function (e: egret.Event) {
        //     var data = JSON.parse(urlLoader.data);
        // }, this);
        // let scrollList: ScrollerList = new ScrollerList();
        // this.addChild(scrollList);
        // scrollList.width = 640;
        // scrollList.height = 960;
        // // let layout = scrollList.getTileLayout();
        // let layout = scrollList.getVerticalLayout();
        // // layout.requestedColumnCount = 3;
        // scrollList.layout = layout;
        // let itemArray = [
        //     { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
        //     { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
        //     { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
        //     { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" }
        // ];
        // scrollList.itemRendererSkinName = "testRender";
        // scrollList.dataProvider = new eui.ArrayCollection(itemArray);
        // let listPanel = new HallLayer();
        // this.addChild(listPanel);
        // let tarbar:eui.TabBar = new eui.TabBar();
        // tarbar.layout = new eui.VerticalLayout();
        // tarbar.horizontalCenter = 0;
        // tarbar.y = 100;
        // tarbar.selectedIndex = 1;
        // tarbar.itemRendererSkinName = "TabBarButtonSkin";
        // tarbar.dataProvider = new eui.ArrayCollection(["装备","宝石","时装","武学"]);
        // this.addChild(tarbar);
        // let arrCol = new eui.ArrayCollection();
        // arrCol.source = [
        //     { username: "lucy", online: true }, { username: "hello", online: false }, { username: "hello", online: true },
        // ];
        // let dataGroup:eui.DataGroup = new eui.DataGroup();
        // dataGroup.itemRenderer = PlayerStateItemRender;
        // dataGroup.itemRendererSkinName = "playerState";
        // dataGroup.dataProvider = arrCol;
        // dataGroup.width = 480;
        // dataGroup.height = 300;
        // this.addChild(dataGroup);
    };
    Main.prototype.onClick = function (event) {
        if (event.target == this.btn1 || event.target == this.btn2) {
            return;
        }
        this.system.emitterX = event.stageX;
        this.system.emitterY = event.stageY;
    };
    Main.prototype.changeEffect = function () {
        this.configIndex++;
        if (this.configIndex >= this.configList.length) {
            this.configIndex = 0;
        }
        var s = this.configList[this.configIndex];
        var textureS = this.textureList[this.textureIndex];
        var texture = RES.getRes(textureS + "_png");
        var config = RES.getRes(s + "_json");
        if (this.system) {
            this.system.stop();
            this.removeChild(this.system);
        }
        this.system = new particle.GravityParticleSystem(texture, config);
        this.addChild(this.system);
        this.system.start();
    };
    Main.prototype.changeTexture = function () {
        this.textureIndex++;
        if (this.textureIndex >= this.textureList.length) {
            this.textureIndex = 0;
        }
        var s = this.textureList[this.textureIndex];
        var texture = RES.getRes(s);
        this.system.changeTexture(texture);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map