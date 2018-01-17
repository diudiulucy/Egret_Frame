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
		PopupManager.Instance.close(PopUpLayers[PopUpLayers.ShopLayer], EffectType.Slight);
	}


	private _onShopItemTap(event: eui.ItemTapEvent) {
		console.log(event.itemIndex);
		platform.payOrder(event.item.gid);
	}
}