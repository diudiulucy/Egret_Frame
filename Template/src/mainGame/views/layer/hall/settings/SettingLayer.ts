class SettingLayer extends Layer {
	private btn_close: eui.Button;
	private about:TabStackView;

	private tab1:eui.Group;
	private tab2:eui.Group;
	private tab3:eui.Group;

	public constructor() {
		super();
		this.skinName = "skins.SettingLayer";
		this.percentWidth = 100;
		this.percentHeight = 100;
	}

	protected init() {
		super.init();
		let viewArr  = [this.tab1,this.tab2,this.tab3];
		this.about.addTabViews(viewArr)
		this.about.selectedIndex = 0;
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