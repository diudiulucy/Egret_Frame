/**
 * 登录场景
 * @author lucywang
 * @date 2018/01/05
 */
class LoginScene extends Scene {
	
	public constructor() {
		super();
	}

	protected init() {
		super.init();

		let loginLayer = new LoginLayer();
		this.addChild(loginLayer);
	}

	public onExitAnimation(){
		// egret.Tween.get(this).wait(300).to({x:this.stage.width }, 600, egret.Ease.cubicOut);
	}
}