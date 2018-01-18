class RulelLayer extends Layer {
    private btn_close: eui.Button;

    public constructor() {
        super();
        this.skinName = "skins.RuleLayer";
        this.percentWidth = 100;
        this.percentHeight = 100;
    }

    protected init(): void {
        super.init();

    }

    protected setOnTouchListener() {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onCloseClick, this);
    }

    protected removeOnTouchListener() {
        this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onCloseClick, this);
    }

    private _onCloseClick() {
		PopupManager.Instance.close(PopUpLayers[PopUpLayers.RulelLayer], EffectType.Slight);
	}

}