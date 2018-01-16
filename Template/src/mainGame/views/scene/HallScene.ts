/**
 * 大厅场景
 * @author lucywang
 * @date 2018/01/05
 */
class HallScene extends Scene {

	public constructor() {
		super();
	}

	protected init() {
		let hallLayer = new HallLayer();
		this.addChild(hallLayer);
	}

	public onEnterAnimation() {
		// this.alpha = 0;
		// this.scaleX = 0.5;
		// this.scaleY = 0.5;
		// egret.Tween.get(this).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 600,egret.Ease.cubicOut);

	}

}