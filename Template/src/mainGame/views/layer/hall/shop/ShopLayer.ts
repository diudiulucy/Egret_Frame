class ShopLayer extends Layer {
	private btn_close: eui.Button;
	private shopList: eui.List;
	private coin = 0;
	public constructor() {
		super();
		this.skinName = "skins.Shop";
		this.percentWidth = 100;
		this.percentHeight = 100;
	}

	protected init() {
		super.init();
	}

	protected setOnTouchListener() {
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onCloseClick, this);
		this.shopList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShopItemTap, this);
	}

	protected removeOnTouchListener() {
		this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onCloseClick, this);
		this.shopList.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShopItemTap, this);
	}

	private _onCloseClick() {
		PopupManager.Instance.close(PopUpLayers[PopUpLayers.ShopLayer], EffectType.Violent);
	}


	private _onShopItemTap(event: eui.ItemTapEvent) {
		console.log(event.itemIndex);
		let param = JSON.stringify({ gid: event.item.gid, Authorization: "ZW1tLWx1b3lhbnBpbmcteW91Y2FuZ3Vlc3N0aGlzLTE3NTA3" });
		Http.post("http://47.104.85.224:3000/shop/gift/buy/", param, this.payOrderHandler, this);

	}

	/**
	 * 下订单回调
	 */
	private payOrderHandler(e) {
		var request = e.currentTarget;
		let result = JSON.parse(request.response);
		if (result.code == "200") {
			//下单
			platform.pay(result.data.product_id);
		}
		console.log("post data : ", request.response);
	}


}