var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;c;)try{if(i=1,o&&(a=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,o=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){c.label=n[1];break}if(6===n[0]&&c.label<a[1]){c.label=a[1],a=n;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(n);break}a[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(r){n=[6,r],o=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},Layer=function(e){function t(){var t=e.call(this)||this;return t.TAG="",t.CustomUIEventList=null,t.TAG=egret.getQualifiedClassName(t),t.addEventListener(egret.Event.ADDED_TO_STAGE,t.init,t),t.addEventListener(egret.Event.REMOVED_FROM_STAGE,t.onDestroy,t),t}return __extends(t,e),t.prototype.init=function(){console.log(this.TAG+" init"),this._registerCustomUIEventsList(!0),this.setOnTouchListener(),this.watchData()},t.prototype.watchData=function(){},t.prototype._registerCustomUIEventsList=function(e){if(this.CustomUIEventList)for(var t=0,n=this.CustomUIEventList;t<n.length;t++){var r=n[t],i=r.toString(),o="ui_"+i;this[o]?e?EventManager.getInstance().register(i,this[o],this):EventManager.getInstance().unRegister(i,this[o],this):console.error("未添加"+this.TAG+"的"+o+"的监听")}},t.prototype.setOnTouchListener=function(){},t.prototype.removeOnTouchListener=function(){},t.prototype.onDestroy=function(){console.log(this.TAG+" onDestroy"),this._registerCustomUIEventsList(!1),this.removeOnTouchListener(),this.CustomUIEventList=null},t}(eui.Component);__reflect(Layer.prototype,"Layer");var Scene=function(e){function t(){var t=e.call(this)||this;return t.TAG="",t.TAG=egret.getQualifiedClassName(t),t.addEventListener(egret.Event.ADDED_TO_STAGE,t.init,t),t.addEventListener(egret.Event.REMOVED_FROM_STAGE,t.onDestroy,t),t}return __extends(t,e),t.prototype.init=function(){console.log(this.TAG+" init"),this._isRunning=!0},Object.defineProperty(t.prototype,"isRunning",{get:function(){return this._isRunning},enumerable:!0,configurable:!0}),t.prototype.onEnterAnimation=function(){console.log(this.TAG+" onEnterAnimation")},t.prototype.onExitAnimation=function(){console.log(this.TAG+" onExitAnimation")},t.prototype.onDestroy=function(){console.log(this.TAG+" onDestroy"),this.removeChildren()},t}(eui.UILayer);__reflect(Scene.prototype,"Scene");var Single=function(){function e(){}return e.getInstance=function(){var e=egret.getQualifiedClassName(this),t=egret.getDefinitionByName(e);return this._instance||(this._instance=new t),this._instance},e}();__reflect(Single.prototype,"Single");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.init=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e.prototype.pay=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e.prototype.payOrder=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var MCPlayer=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),this._mc=new egret.MovieClip,this._mc.movieClipData=this._mcDataFactory.generateMovieClipData(this._mcLink),this.anchorOffsetX=this.width/2,this.anchorOffsetY=this.height/2,this.horizontalCenter=0,this.verticalCenter=0,this.addChild(this._mc),this.play(-1)},Object.defineProperty(t.prototype,"MC",{get:function(){return this._mc},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mcLink",{get:function(){return this._mcLink},set:function(e){this._mcLink=e;var t=RES.getRes(e+"_mc_json"),n=RES.getRes(e+"_tex_png");this._mcDataFactory=new egret.MovieClipDataFactory(t,n)},enumerable:!0,configurable:!0}),t.prototype.stop=function(){this._mc&&this._mc.stop()},t.prototype.play=function(e){this._mc&&this._mc.play(e)},t}(eui.Component);__reflect(MCPlayer.prototype,"MCPlayer");var Handler=function(){function e(e,t){void 0===e&&(e=null),void 0===t&&(t=null),this.method=e,this.thisObj=t}return e.prototype.dispose=function(){this.method=null,this.thisObj=null},e.create=function(t,n){return void 0===t&&(t=null),void 0===n&&(n=null),new e(t,n)},e}();__reflect(Handler.prototype,"Handler");var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),egret.ImageLoader.crossOrigin="anonymous",this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=n.sent(),[4,platform.init()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return t=n.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig(GameConfig.default_res_json,GameConfig.default_resource)];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme(GameConfig.default_thm_json,e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){ErrorCodeManager.Instance.init("error_txt"),console.log(ErrorCodeManager.Instance.getErrorCode(1001)),SceneManager.Instance.runWithScene(SceneConst[SceneConst.LoginScene]);var e=document.getElementById("bgImg");e.parentNode.removeChild(e);var t={id:1,name:2},n=JSON.stringify(t);NativeManager.Instance.callNative(NativeFunc.callNative,n)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function i(e){t.call(r,e)}function o(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(r))}"undefined"!=typeof generateEUI?egret.callLater(function(){t.call(r,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT))},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var AnimUtil=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),Object.defineProperty(t,"Instance",{get:function(){return this.getInstance()},enumerable:!0,configurable:!0}),t.prototype.doRepeatAnimation=function(e,t,n){function r(n,r){var i=this;egret.Tween.get(e).to({alpha:1},t).call(function(){i.doRepeatAnimation(n,t,r)},this)}0>=n||(console.log("执行次数"+n),n-=1,egret.Tween.get(e).to({alpha:0},t).call(r,this,[e,n]))},t}(Single);__reflect(AnimUtil.prototype,"AnimUtil");var ErrorCodeManager=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.map={},t}return __extends(t,e),Object.defineProperty(t,"Instance",{get:function(){return this.getInstance()},enumerable:!0,configurable:!0}),t.prototype.init=function(e){var t=this,n=RES.getRes(e);console.assert(""!=n,"read file failed"),n.replace(/\r/g,"");var r=n.split("\n");r.forEach(function(e){if(-1!=e.indexOf(":")){var n=e.split(":");t.map[n[0]]=n[1]}})},t.prototype.getErrorCode=function(e){var t=this.map[e];return t||"code not found"+e},t}(Single);__reflect(ErrorCodeManager.prototype,"ErrorCodeManager");var EventManager=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.getInstance=function(){return this.instance||(t.instance=new t),t.instance},t.prototype.dispatchCustomEvent=function(e,n){t.instance.dispatchEventWith(e,!1,n)},t.prototype.register=function(e,n,r){t.instance.addEventListener(e,n,r)},t.prototype.unRegister=function(e,n,r){t.instance.removeEventListener(e,n,r)},t}(egret.EventDispatcher);__reflect(EventManager.prototype,"EventManager");var FrameManager=function(e){function t(){var t=e.call(this)||this;t._funsArray=[],t._funDic={};var n=egret.MainContext.instance.stage;return n.addEventListener(egret.Event.ENTER_FRAME,t._loopHandler,t),t}return __extends(t,e),Object.defineProperty(t,"Instance",{get:function(){return this.getInstance()},enumerable:!0,configurable:!0}),t.prototype._loopHandler=function(){this._doFrame()},t.prototype._doFrame=function(){var e=this._funsArray;if(0!=e.length)for(var t=e.length-1;t>=0;t--){var n=e[t];n&&n.method&&n.method.call(n.thisObj)}},t.prototype.addFrame=function(e,t,n){if(!this._funDic[e]){var r=new Handler(t,n);this._funDic[e]=r,this._funsArray.push(r)}},t.prototype.removeFrame=function(e){var t=this._funDic[e];if(t){var n=this._funsArray;if(0!=n.length){var r=n.indexOf(t);-1!=r&&(n.splice(r,1),t.dispose(),this._funDic[e]=null,delete this._funDic[e])}}},t}(Single);__reflect(FrameManager.prototype,"FrameManager");var NativeFunc;!function(e){e[e.callNative=0]="callNative"}(NativeFunc||(NativeFunc={}));var NativeManager=function(e){function t(){var t=e.call(this)||this;return t._setNativeInterface(),t}return __extends(t,e),Object.defineProperty(t,"Instance",{get:function(){return this.getInstance()},enumerable:!0,configurable:!0}),t.prototype._setNativeInterface=function(){egret.ExternalInterface.addCallback("CallJS",this._callJS)},t.prototype._callJS=function(e){var t=JSON.parse(e);console.log("aaaaaaaaaaa",t.func),this["_"+t.func](t.args)},t.prototype._function1=function(e){console.log("function1 真心无语",e)},t.prototype.callNative=function(e,t){console.log(NativeFunc[e]),egret.ExternalInterface.call(NativeFunc[e],t)},t}(Single);__reflect(NativeManager.prototype,"NativeManager");var EffectType;!function(e){e[e.None=0]="None",e[e.Slight=1]="Slight",e[e.Violent=2]="Violent",e[e.LeftRigt=3]="LeftRigt",e[e.RightLeft=4]="RightLeft",e[e.UpDown=5]="UpDown",e[e.DownUp=6]="DownUp"}(EffectType||(EffectType={}));var PopupManager=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._popUpLayerList={},t}return __extends(t,e),Object.defineProperty(t,"Instance",{get:function(){return this.getInstance()},enumerable:!0,configurable:!0}),t.prototype.open=function(e,t,n){void 0===t&&(t=EffectType.None),void 0===n&&(n=!1);var r=SceneManager.Instance.runningScene;if(!r.contains(this._popUpLayerList[e])){var i=egret.getDefinitionByName(e),o=new i;r.addChild(o),this._popUpLayerList[e]=o,n&&this._createDarkBg(o),t!=EffectType.None&&this._playOpenEffect(o,t)}},t.prototype.close=function(e,t){var n=SceneManager.Instance.runningScene;if(e||n.contains(this._popUpLayerList[e])){var r=function(){i&&n.contains(i)&&(n.removeChild(i),this._popUpLayerList[e]=null,delete this._popUpLayerList[e])},i=this._popUpLayerList[e];this._playCloseEffect(i,t,r)}},t.prototype._createDarkBg=function(e){var t=egret.MainContext.instance.stage.width,n=egret.MainContext.instance.stage.height;this._darkBg=new egret.Sprite,this._darkBg.graphics.clear(),this._darkBg.graphics.beginFill(0,.6),this._darkBg.graphics.drawRect(0,0,t,n),this._darkBg.graphics.endFill(),this._darkBg.width=t,this._darkBg.height=n,this._darkBg.visible=!0,e.contains(this._darkBg)||e.addChildAt(this._darkBg,0),this._darkBg.touchEnabled=!0,egret.Tween.get(this._darkBg).to({alpha:1},150)},t.prototype._playOpenEffect=function(e,t){switch(t){case EffectType.Slight:e.alpha=0,e.scaleX=.5,e.scaleY=.5,egret.Tween.get(e).to({alpha:1,scaleX:1,scaleY:1},300,egret.Ease.backOut);break;case EffectType.Violent:e.alpha=0,e.scaleX=.5,e.scaleY=.5,egret.Tween.get(e).to({alpha:1,scaleX:1,scaleY:1},600,egret.Ease.elasticOut);break;case EffectType.LeftRigt:e.x=-egret.MainContext.instance.stage.width,egret.Tween.get(e).to({x:0},500,egret.Ease.cubicOut);break;case EffectType.RightLeft:e.x=egret.MainContext.instance.stage.width,egret.Tween.get(e).to({x:0},500,egret.Ease.cubicOut);break;case EffectType.UpDown:e.y=-egret.MainContext.instance.stage.height,egret.Tween.get(e).to({y:0},500,egret.Ease.cubicOut);break;case EffectType.DownUp:e.y=egret.MainContext.instance.stage.height,egret.Tween.get(e).to({y:0},500,egret.Ease.cubicOut)}},t.prototype._playCloseEffect=function(e,t,n){var r=function(){e.contains(this.darkSprite)&&e.removeChild(this.darkSprite)};switch(this._darkBg&&egret.Tween.get(this._darkBg).to({alpha:0},100).call(r,this),t){case EffectType.None:n.call(this);break;case EffectType.Slight:egret.Tween.get(e).to({alpha:0,scaleX:0,scaleY:0},500,egret.Ease.backOut).call(n,this);break;case EffectType.Violent:egret.Tween.get(e).to({alpha:0,scaleX:0,scaleY:0},300,egret.Ease.elasticOut).call(n,this);break;case EffectType.LeftRigt:egret.Tween.get(e).to({x:e.width},500,egret.Ease.cubicOut).call(n,this);break;case EffectType.RightLeft:egret.Tween.get(e).to({x:-e.width},500,egret.Ease.cubicOut).call(n,this);break;case EffectType.UpDown:egret.Tween.get(e).to({y:e.height},500,egret.Ease.cubicOut).call(n,this);break;case EffectType.DownUp:egret.Tween.get(e).to({y:-e.height},500,egret.Ease.cubicOut).call(n,this)}},t}(Single);__reflect(PopupManager.prototype,"PopupManager");var SceneManager=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._runningScene=null,t._scenesStack=[],t._nextScene=null,t}return __extends(t,e),Object.defineProperty(t,"Instance",{get:function(){return this.getInstance()},enumerable:!0,configurable:!0}),t.prototype.runWithScene=function(e){console.assert(null!=e,"This command can only be used to start the SceneManager. There is already a scene present."),console.assert(null==this._runningScene,"_runningScene should be null"),this.pushScene(e)},t.prototype.replaceScene=function(e){if(console.assert(null!=e,"the scene should not be null"),null==this._runningScene)return void this.runWithScene(e);var t=egret.getDefinitionByName(e),n=new t;if(n!=this._nextScene){this._nextScene&&(this._nextScene.isRunning&&this._nextScene.parent.removeChild(this._nextScene),this._nextScene=null),this._sendCleanupToScene=!0;var r=this._scenesStack.length;this._scenesStack.splice(r-1,1,n),this._nextScene=n,this._setNextScene()}},t.prototype.pushScene=function(e){console.assert(null!=e,"the scene should not null"),this._sendCleanupToScene=!1;var t=egret.getDefinitionByName(e),n=new t;this._scenesStack.push(n),this._nextScene=n,this._setNextScene()},t.prototype.popScene=function(){console.assert(null!=this._runningScene,"running scene should not null"),this._scenesStack.pop();var e=this._scenesStack.length;0==e||(this._sendCleanupToScene=!0,this._nextScene=this._scenesStack[e-1],this._setNextScene())},t.prototype._setNextScene=function(){egret.MainContext.instance.stage.addChild(this._nextScene),this._runningScene&&this._runningScene.onExitAnimation(),this._nextScene.onEnterAnimation(),this._sendCleanupToScene&&this._runningScene&&this._runningScene.parent.removeChild(this._runningScene),this._runningScene=this._nextScene,this._nextScene=null},Object.defineProperty(t.prototype,"runningScene",{get:function(){return this._runningScene},enumerable:!0,configurable:!0}),t}(Single);__reflect(SceneManager.prototype,"SceneManager");var Http=function(){function e(){}return e.post=function(e,t,n,r,i,o){console.log("post url = "+e);var a=new egret.HttpRequest;if(a.responseType=egret.HttpResponseType.TEXT,a.open(e,egret.HttpMethod.POST),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t)if(t instanceof Object){var s=this.changeUrlCode(t);a.send(s)}else a.send(t);else a.send();n&&a.addEventListener(egret.Event.COMPLETE,n,r),i&&a.addEventListener(egret.IOErrorEvent.IO_ERROR,i,r),o&&a.addEventListener(egret.ProgressEvent.PROGRESS,o,r)},e.get=function(e,t,n,r,i){console.log("get url = "+e);var o=new egret.HttpRequest;if(o.responseType=egret.HttpResponseType.TEXT,t){var a=this.changeUrlCode(t);o.open(e+"?"+a,egret.HttpMethod.GET)}else o.open(e,egret.HttpMethod.GET);o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send(),n&&o.addEventListener(egret.Event.COMPLETE,n,r),i&&o.addEventListener(egret.IOErrorEvent.IO_ERROR,i,r)},e.changeUrlCode=function(e){if(!e)return null;var t="";for(var n in e)t+=n+"="+e[n]+"&";return t.substr(0,t.length-1)},e}();__reflect(Http.prototype,"Http");var EgretPlatform=function(){function e(){this._appKey="vfgYd3UV8hyKPRAwvw8nH",this._appId=92068,this._Authorization="ZW1tLWx1b3lhbnBpbmcteW91Y2FuZ3Vlc3N0aGlzLTE3NTA3",this._goodsNumber="1",this._ext="",this._serverId="1",this._intervalDuration=1e3}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.init=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){return console.log("start nest init"),e={},e.egretAppId=this._appId,e.version=2,e.debug=!0,nest.easyuser.startup(e,function(e){0==e.result?platform.login():console.log("nest init fail")}),[2]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){return console.log("login start"),e=nest.easyuser.getLoginTypes(),e.length?(t=e[0],1!=e.length||"wx"!=t.loginType&&"qq"!=t.loginType||nest.easyuser.login(t,this._onLoginHandler.bind(this))):nest.easyuser.login({},this._onLoginHandler.bind(this)),[2]})})},e.prototype.payOrder=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){return t=JSON.stringify({gid:e,Authorization:this._Authorization}),Http.post("http://47.104.85.224:3000/shop/gift/buy/",t,this.payOrderHandler,this),[2]})})},e.prototype.pay=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){return t={goodsId:e,goodsNumber:this._goodsNumber,serverId:this._serverId,ext:this._ext},console.log(t),nest.iap.pay(t,this._onPayHandler.bind(this)),[2]})})},e.prototype._onLoginHandler=function(e){if(0==e.result){egret.log("log Success");var t=JSON.stringify({token:e.token});Http.post("http://47.104.85.224:3000/user/login/egret/",t,function(e){var t=e.currentTarget,n=JSON.parse(t.response);console.log("_onLoginHandler : ",n),"200"==n.code},this)}else egret.log("log Fail")},e.prototype.payOrderHandler=function(e){var t=e.currentTarget,n=JSON.parse(t.response);console.log("return payOrderHandler : ",n);var r=n.data;"200"==n.code&&(this._orderId=r.order_id,console.log("订单号：",this._orderId),platform.pay(n.data.product_id))},e.prototype._onPayHandler=function(e){console.log(e),0==e.result?this._intervalId=egret.setInterval(this._checkOrderHandler,this,this._intervalDuration):-1==e.result},e.prototype._checkOrderHandler=function(){var e=this,t=JSON.stringify({order_id:this._orderId,Authorization:this._Authorization});Http.post("http://47.104.85.224:3000/user/pay/status/ ",t,function(t){var n=t.currentTarget,r=JSON.parse(n.response);console.log("_checkOrderHandler : ",r),"200"==r.code&&(egret.clearInterval(e._intervalId),e._RefreshUserData())},this)},e.prototype._RefreshUserData=function(){var e=JSON.stringify({Authorization:this._Authorization});Http.post("http://47.104.85.224:3000/user/pay/status/ ",e,function(e){var t=e.currentTarget,n=JSON.parse(t.response);console.log("_RefreshUserData : ",n),"200"==n.code},this)},e}();__reflect(EgretPlatform.prototype,"EgretPlatform",["Platform"]);var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?r(i):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var ScrollerList=function(e){function t(){var t=e.call(this)||this;return t._list=new eui.List,t._scroller=new eui.Scroller,t._scroller.bounces=!1,t._scroller.viewport=t._list,t.addChild(t._scroller),t.addEventListener(egret.Event.RESIZE,t._onResize,t),t._list.addEventListener(eui.ItemTapEvent.ITEM_TAP,t._onItemTap,t),t}return __extends(t,e),t.prototype._onResize=function(){this._scroller.width=this.width,this._scroller.height=this.height},t.prototype._onItemTap=function(e){this.dispatchEvent(e)},Object.defineProperty(t.prototype,"dataProvider",{get:function(){return this._list.dataProvider},set:function(e){this._list.dataProvider=e,this.addEventListener(egret.Event.ENTER_FRAME,this._onEnterFrame,this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"itemRender",{get:function(){return this._list.itemRenderer},set:function(e){this._list.itemRenderer=e,this.addEventListener(egret.Event.ENTER_FRAME,this._onEnterFrame,this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"itemRendererSkinName",{get:function(){return this._list.itemRendererSkinName},set:function(e){this._list.itemRendererSkinName=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedIndex",{get:function(){return this._list.selectedIndex},set:function(e){this._list.selectedIndex=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedItem",{get:function(){return this._list.selectedItem},set:function(e){this._list.selectedItem=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allowMultipleSelection",{get:function(){return this._list.allowMultipleSelection},set:function(e){this._list.allowMultipleSelection=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedIndices",{get:function(){return this._list.selectedIndices},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"useVirtualLayout",{get:function(){return this._list.useVirtualLayout},set:function(e){this._list.useVirtualLayout=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layout",{get:function(){return this._list.layout},set:function(e){this._list.layout=e},enumerable:!0,configurable:!0}),t.prototype.getTileLayout=function(){return new eui.TileLayout},t.prototype.getVerticalLayout=function(){return new eui.VerticalLayout},t.prototype._onEnterFrame=function(){this.removeEventListener(egret.Event.ENTER_FRAME,this._onEnterFrame,this),this._onResize();var e=this._list.dataProvider,t=this._doDateTxt;e&&0==e.length&&(t||(t=this._doDateTxt=new eui.Label("目前列表为空"),t.size=18,this.addChild(t),t.horizontalCenter=0,t.verticalCenter=0)),t&&(t.visible=0==e.length)},t}(eui.Component);__reflect(ScrollerList.prototype,"ScrollerList");var TabStackView=function(e){function t(){return e.call(this)||this}return __extends(t,e),t}(eui.Component);__reflect(TabStackView.prototype,"TabStackView");var ArrayUtils;!function(e){function t(e){e.sort(function(e,t){return e-t})}function n(e){var t=0;for(var n in e)t++;return t}function r(e,t){var n=e.indexOf(t);-1!=n&&e.splice(n,1)}function i(e){return[].concat(JSON.parse(JSON.stringify(e)))}function o(e){var t=Object.keys(e);return 0==t.length}function a(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return t}e.sortByAsc=t,e.getObjectLength=n,e.deleteByValue=r,e.DeepCopy=i,e.isEmptyObject=o,e.strToArrayBuffer=a}(ArrayUtils||(ArrayUtils={}));var GameConfig=function(){function e(){}return e.default_res_json="resource/default.res.json",e.default_thm_json="resource/default.thm.json",e.default_resource="resource/",e}();__reflect(GameConfig.prototype,"GameConfig");var SceneConst;!function(e){e[e.LoginScene=0]="LoginScene",e[e.HallScene=1]="HallScene",e[e.GameScene=2]="GameScene"}(SceneConst||(SceneConst={}));var PopUpLayers;!function(e){e[e.ShopLayer=0]="ShopLayer",e[e.RulelLayer=1]="RulelLayer",e[e.SettingLayer=2]="SettingLayer"}(PopUpLayers||(PopUpLayers={}));var HallMenu=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.menu_list.addEventListener(egret.TouchEvent.TOUCH_TAP,this._onItemTap,this)},t.prototype._onItemTap=function(e){console.log(e.itemIndex)},t}(eui.Component);__reflect(HallMenu.prototype,"HallMenu");var Rank=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this);for(var t=[],n=0;100>n;n++){var r={};r.No=n,r.name="lucy"+n,t.push(r)}var i=new eui.VerticalLayout;this.rankList.layout=i;var o=new eui.ArrayCollection(t);this.rankList.dataProvider=o},t}(eui.Component);__reflect(Rank.prototype,"Rank");var PlayerStateItemRender=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.dataChanged=function(){this.usernameTxt.text=this.data.username,this.onlineTxt.text=1==this.data.online?"在线":"离线"},t}(eui.ItemRenderer);__reflect(PlayerStateItemRender.prototype,"PlayerStateItemRender");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.percentWidth=100,this.percentHeight=100,this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(Layer);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var MenuList;!function(e){e[e.Rule=0]="Rule",e[e.FeedBack=1]="FeedBack",e[e.Settings=2]="Settings",e[e.Share=3]="Share",e[e.Shop=4]="Shop",e[e.Mail=5]="Mail",e[e.Benifit=6]="Benifit"}(MenuList||(MenuList={}));var HallLayer=function(e){function t(){var t=e.call(this)||this;return t.skinName="Skin.Hall",t.percentWidth=100,t.percentHeight=100,t}return __extends(t,e),t.prototype.init=function(){e.prototype.init.call(this),AnimUtil.Instance.doRepeatAnimation(this.logo,500,3),this._flowerParticle()},t.prototype._flowerParticle=function(){var e=RES.getRes("flower_png"),t=RES.getRes("flower_json");this.system=new particle.GravityParticleSystem(e,t),this.system.start(),this.addChild(this.system)},t.prototype.setOnTouchListener=function(){this.menu_list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this._onMenuItemTap,this),this.virtuallayout.addEventListener(egret.Event.CHANGE,this._onChange,this),this.btn_new.addEventListener(egret.TouchEvent.TOUCH_TAP,this._onBtnNewClick,this)},t.prototype.removeOnTouchListener=function(){this.menu_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP,this._onMenuItemTap,this),this.virtuallayout.removeEventListener(egret.Event.CHANGE,this._onChange,this)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this);for(var t=[],n=0;100>n;n++){var r={};r.name=n,r.price=100+n,t.push(r)}this.virtual.text=1==this.player.useVirtualLayout?"开启":"关闭";var i=this.player.getVerticalLayout();i.horizontalAlign=eui.JustifyAlign.CONTENT_JUSTIFY,this.player.layout=i,this.arrCol=new eui.ArrayCollection(t),this.player.dataProvider=this.arrCol},t.prototype._onChange=function(e){this.virtuallayout.selected?this.player.useVirtualLayout=!0:this.player.useVirtualLayout=!1,this.virtuallayout.selected?this.virtual.text="开启":this.virtual.text="关闭",console.log(this.virtual.text)},t.prototype._onMenuItemTap=function(e){switch(console.log(e.itemIndex),e.itemIndex){case MenuList.Shop:PopupManager.Instance.open(PopUpLayers[PopUpLayers.ShopLayer],EffectType.Slight,!0);break;case MenuList.Rule:PopupManager.Instance.open(PopUpLayers[PopUpLayers.RulelLayer],EffectType.Violent,!0);break;case MenuList.Settings:PopupManager.Instance.open(PopUpLayers[PopUpLayers.SettingLayer],EffectType.LeftRigt,!0)}},t.prototype._onBtnNewClick=function(){console.log(this.arrCol.getItemAt(0));var e=this.arrCol.getItemAt(0);console.log(this.arrCol.getItemIndex(e))},t}(Layer);__reflect(HallLayer.prototype,"HallLayer");var RulelLayer=function(e){function t(){var t=e.call(this)||this;return t.skinName="skins.RuleLayer",t.percentWidth=100,t.percentHeight=100,t}return __extends(t,e),t.prototype.init=function(){e.prototype.init.call(this)},t.prototype.setOnTouchListener=function(){this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this._onCloseClick,this)},t.prototype.removeOnTouchListener=function(){this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP,this._onCloseClick,this)},t.prototype._onCloseClick=function(){PopupManager.Instance.close(PopUpLayers[PopUpLayers.RulelLayer],EffectType.Slight)},t}(Layer);__reflect(RulelLayer.prototype,"RulelLayer");var SettingLayer=function(e){function t(){var t=e.call(this)||this;return t.skinName="skins.SettingLayer",t.percentWidth=100,t.percentHeight=100,t}return __extends(t,e),t.prototype.init=function(){e.prototype.init.call(this)},t.prototype.setOnTouchListener=function(){this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this._onCloseClick,this)},t.prototype.removeOnTouchListener=function(){this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP,this._onCloseClick,this)},t.prototype._onCloseClick=function(){PopupManager.Instance.close(PopUpLayers[PopUpLayers.SettingLayer],EffectType.RightLeft)},t}(Layer);__reflect(SettingLayer.prototype,"SettingLayer");var ShopLayer=function(e){function t(){var t=e.call(this)||this;return t.coin=0,t.skinName="skins.Shop",t.percentWidth=100,t.percentHeight=100,t}return __extends(t,e),t.prototype.init=function(){e.prototype.init.call(this)},t.prototype.setOnTouchListener=function(){this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this._onCloseClick,this),this.shopList.addEventListener(eui.ItemTapEvent.ITEM_TAP,this._onShopItemTap,this)},t.prototype.removeOnTouchListener=function(){this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP,this._onCloseClick,this),this.shopList.removeEventListener(eui.ItemTapEvent.ITEM_TAP,this._onShopItemTap,this)},t.prototype._onCloseClick=function(){PopupManager.Instance.close(PopUpLayers[PopUpLayers.ShopLayer],EffectType.Slight)},t.prototype._onShopItemTap=function(e){console.log(e.itemIndex),platform.payOrder(e.item.gid)},t}(Layer);__reflect(ShopLayer.prototype,"ShopLayer");var LoginLayer=function(e){function t(){var t=e.call(this)||this;
return t.skinName="skins.LoginLayer",t.percentWidth=100,t.percentHeight=100,t}return __extends(t,e),t.prototype.init=function(){e.prototype.init.call(this)},t.prototype.setOnTouchListener=function(){this.btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLoginClick,this)},t.prototype.removeOnTouchListener=function(){this.btn_login.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onLoginClick,this)},t.prototype.onLoginClick=function(){SceneManager.Instance.replaceScene(SceneConst[SceneConst.HallScene]),console.log("更新没"),egret.localStorage.setItem("userName",this.edit_name.text);var e=egret.Base64Util.decode("MTEyMjMz");console.log(egret.Base64Util.encode(e));var t=this.edit_psw.text;console.log(egret.Base64Util.encode(ArrayUtils.strToArrayBuffer(t))),egret.localStorage.setItem("psw",this.edit_psw.text)},t.prototype.dosomething=function(){console.log("执行帧调度")},t}(Layer);__reflect(LoginLayer.prototype,"LoginLayer");var HallScene=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.init=function(){var e=new HallLayer;this.addChild(e)},t.prototype.onEnterAnimation=function(){},t}(Scene);__reflect(HallScene.prototype,"HallScene");var LoginScene=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.init=function(){e.prototype.init.call(this);var t=new LoginLayer;this.addChild(t)},t.prototype.onExitAnimation=function(){},t}(Scene);__reflect(LoginScene.prototype,"LoginScene");