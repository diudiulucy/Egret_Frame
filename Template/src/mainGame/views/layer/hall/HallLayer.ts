/**
 * 底部菜单枚举类型
 */
enum MenuList {
	Rule,
	FeedBack,
	Settings,
	Share,
	Shop,
	Mail,
	Benifit,
}

class HallLayer extends Layer {
	private player: ScrollerList;
	private virtuallayout: eui.ToggleButton;
	private virtual: eui.Label;
	private btn_new: eui.Button;
	private arrCol: eui.ArrayCollection;
	private menu_bottom: HallMenu;
	private gameEntryList: eui.List;
	private menu_list: eui.List;
	private logo: eui.Image;
	private system;
	public constructor() {
		super();
		this.skinName = "Skin.Hall";
		this.percentWidth = 100;
		this.percentHeight = 100;
	}

	protected init(): void {
		super.init();
		AnimUtil.Instance.doRepeatAnimation(this.logo, 500, 3);
		// var timer = new egret.Timer(2000,3);
		// timer.addEventListener(egret.TimerEvent.TIMER,this._onTimerHandler,this);
		// timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this._onTimerComplete,this);
		// timer.start();
		this._flowerParticle();
	}

	// private _onTimerHandler(event:egret.TimerEvent){
	// 	let target = <egret.Timer>event.target;
	// 	console.log("执行了",target.currentCount);
	// }

	// private _onTimerComplete(event:egret.TimerEvent){
	// 	console.log("完成");
	// }

	private _flowerParticle() {
		//获取纹理
		var texture = RES.getRes("flower_png");
		//获取配置
		var config = RES.getRes("flower_json");
		//创建 GravityParticleSystem
		this.system = new particle.GravityParticleSystem(texture, config);
		//启动粒子库
		this.system.start();
		//将例子系统添加到舞台
		this.addChild(this.system);
	}

	protected setOnTouchListener() {
		// this.player.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onItemTap, this);
		// this.gameEntryList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onItemTap, this);
		this.menu_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onMenuItemTap, this);
		this.virtuallayout.addEventListener(egret.Event.CHANGE, this._onChange, this);
		this.btn_new.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onBtnNewClick, this);
	}

	protected removeOnTouchListener() {
		// this.player.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onItemTap, this);
		// this.gameEntryList.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onItemTap, this);
		this.menu_list.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onMenuItemTap, this);
		this.virtuallayout.removeEventListener(egret.Event.CHANGE, this._onChange, this);
	}

	protected childrenCreated() {
		super.childrenCreated();

		let itemArray = [];
		interface User {
			name: number;
			price: number
		}
		for (let i = 0; i < 100; i++) {
			let item = <User>{};
			item.name = i;
			item.price = 100 + i;
			itemArray.push(item);
		}


		this.virtual.text = this.player.useVirtualLayout == true ? "开启" : "关闭";

		let layout = this.player.getVerticalLayout();
		// let layout = this.player.getTileLayout();
		// layout.requestedColumnCount = 3;


		layout.horizontalAlign = eui.JustifyAlign.CONTENT_JUSTIFY;
		this.player.layout = layout;
		// this.player.itemRendererSkinName = "testRender";
		this.arrCol = new eui.ArrayCollection(itemArray);
		this.player.dataProvider = this.arrCol;


	}

	private _onChange(e: egret.Event) {
		this.virtuallayout.selected ? this.player.useVirtualLayout = true : this.player.useVirtualLayout = false;
		this.virtuallayout.selected ? this.virtual.text = "开启" : this.virtual.text = "关闭";
		console.log(this.virtual.text)
	}

	private _onMenuItemTap(event: eui.ItemTapEvent) {
		console.log(event.itemIndex);

		switch (event.itemIndex) {
			case MenuList.Shop:
				PopupManager.Instance.open(PopUpLayers[PopUpLayers.ShopLayer], EffectType.Slight, true);
				break;
			case MenuList.Rule:
				PopupManager.Instance.open(PopUpLayers[PopUpLayers.RulelLayer], EffectType.Violent, true);
				break;
			case MenuList.Settings:
				PopupManager.Instance.open(PopUpLayers[PopUpLayers.SettingLayer], EffectType.LeftRigt, true);
				break;
		}

	}

	private _onBtnNewClick() {
		// this.player.dataProvider = 
		// this.arrCol.source = [{ name: "daye", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" }];
		// this.itemArray.unshift({ name: "daye", price: "$2000" });
		// this.arrCol.addItemAt({name: "daye", price: "$2000"},0);
		// this.arrCol.replaceItemAt({name: "daye", price: "$2000"},10);
		// this.arrCol.removeItemAt(2);

		console.log(this.arrCol.getItemAt(0));
		let item = this.arrCol.getItemAt(0);
		console.log(this.arrCol.getItemIndex(item));
		// this.arrCol.replaceAll([{ name: "daye", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" }]);

	}
}