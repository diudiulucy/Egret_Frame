class LoginScene extends Scene {
	
	public constructor() {
		super();
	}

	protected init() {
		super.init();

		let loginLayer = new LoginLayer();
		this.addChild(loginLayer);
	}
}