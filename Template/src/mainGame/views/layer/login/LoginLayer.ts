class LoginLayer extends Layer {
    private edit_name: eui.EditableText;
    private edit_psw: eui.EditableText;
    private btn_login: eui.Button;

    public constructor() {
        super();
        this.skinName = "Skin.LoginLayer";
        this.percentWidth = 100;
        this.percentHeight = 100;
    }

    protected init(): void {
        super.init();

    }

    protected setOnTouchListener() {
        this.btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginClick, this);
    }

    protected removeOnTouchListener() {
        this.btn_login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginClick, this);
    }

    private onLoginClick() {
      
        // SceneManager.Instance.replaceScene(SceneConst[SceneConst.HallScene]);

        let payInfo:nest.iap.PayInfo = {
            goodsId:"1",
            goodsNumber:"1",
            serverId:"1",
            ext:"",
        };
        console.log(payInfo);
        nest.iap.pay(payInfo,this._onPayHandler.bind(this));


    }

    private _onPayHandler(payInfo:nest.iap.PayCallbackInfo):void{
        console.log(payInfo);
    }


}