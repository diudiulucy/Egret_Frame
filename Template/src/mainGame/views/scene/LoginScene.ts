class LoginScene extends Scene {
	public loginLayer: LoginLayer;

	public constructor() {
		super();
	}

	protected init() {
		super.init();

		this.loginLayer = new LoginLayer();
		this.addChild(this.loginLayer);
	}
}