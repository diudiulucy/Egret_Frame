class LoginScene extends Scene {
	private loginLayer: LoginLayer;

	public constructor() {
		super();
	}

	protected init() {
		super.init();

		this.loginLayer = new LoginLayer();
		this.addChild(this.loginLayer);
	}

	protected onDestroy(){
		super.onDestroy();
		this.loginLayer = null;
	}
}