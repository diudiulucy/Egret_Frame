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
            await RES.loadConfig("resource/default.res.json", "resource/");
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
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
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

        SceneManager.Instance.runWithScene(SceneConst[SceneConst.LoginScene]);

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
}
