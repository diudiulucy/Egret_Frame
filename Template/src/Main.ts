class Main extends eui.UILayer {

    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

        egret.ImageLoader.crossOrigin = "anonymous";//解决玩吧图片的跨域问题

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        await platform.init();
        // await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig(GameConfig.default_res_json, GameConfig.default_resource);
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme(GameConfig.default_thm_json, this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        ErrorCodeManager.Instance.init("error_txt");
        console.log(ErrorCodeManager.Instance.getErrorCode(1001));
        SceneManager.Instance.runWithScene(SceneConst[SceneConst.LoginScene]);

        let imgBg = document.getElementById("bgImg");
        imgBg.parentNode.removeChild(imgBg);

        let obj = { id:1,name:2};
        let data = JSON.stringify(obj);
        NativeManager.Instance.callNative(NativeFunc.callNative, data);
        // this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        // this.changeEffect();
        
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


    }

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
