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

}