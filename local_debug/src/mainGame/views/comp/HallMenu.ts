/**
 * 菜单栏
 * @author lucywang
 * @date 2017/10/19
 */
class HallMenu extends eui.Component{
	private menu_list:eui.List;
	public constructor() {
		super();
		
	}

	protected childrenCreated(){
		super.childrenCreated();
		this.menu_list.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onItemTap, this);
	}

	private _onItemTap(event: eui.ItemTapEvent) {
		console.log(event.itemIndex);
	}
}