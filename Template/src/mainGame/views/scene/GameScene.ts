/**
 * 游戏场景
 * @author lucywang
 * @date 2018/01/05
 */
class GameScene extends Scene {
	
	public constructor() {
		super();
	}

	protected init() {
		super.init();

		let gameLayer = new GameLayer();
		this.addChild(gameLayer);
	}

	public onExitAnimation(){
		// egret.Tween.get(this).wait(300).to({x:this.stage.width }, 600, egret.Ease.cubicOut);
	}
}