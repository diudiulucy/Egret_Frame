class SettingLayer extends Layer {
	private btn_close: eui.Button;
	
	public constructor() {
		super();
		this.skinName = "skins.SettingLayer";
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
		this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onCloseClick, this);
		
	}

	private _onCloseClick() {
		PopupManager.Instance.close(PopUpLayers[PopUpLayers.SettingLayer], EffectType.RightLeft);
	}

}