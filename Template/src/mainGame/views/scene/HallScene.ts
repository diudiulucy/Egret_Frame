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

	public onEnterAnimation(){
		//  egret.Tween.get(this).to({x:this.stage.width}, 0).to({x:0 }, 600, egret.Ease.cubicOut);
	}

}