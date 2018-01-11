class ShopLayer extends Layer {
	private btn_close: eui.Button;

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
	}

	protected removeOnTouchListener() {
	}

	protected _onCloseClick() {
	
		PopupManager.Instance.close(PopUpLayers[PopUpLayers.ShopLayer], 1);
		// PopupManager.Instance.open(PopUpLayers[PopUpLayers.ShopLayer],false, 1);
	}
}