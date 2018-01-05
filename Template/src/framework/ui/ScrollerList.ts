/**
 * @author lucywang
 * @date 2018/01/04
 */
class ScrollerList extends eui.Component {
	private _list: eui.List = new eui.List();
	private _scroller: eui.Scroller;
	private _doDateTxt: eui.Label;

	public constructor() {
		super();
		this._scroller = new eui.Scroller();
		this._scroller.bounces = false;
		this._scroller.viewport = this._list;
		this.addChild(this._scroller);

		this.addEventListener(egret.Event.RESIZE, this._onResize, this);
		this._list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onItemTap, this);

	}

	private _onResize(): void {
		this._scroller.width = this.width;
		this._scroller.height = this.height;
	}

	private _onItemTap(event: eui.ItemTapEvent): void {
		this.dispatchEvent(event);
	}

	public set dataProvider(dp: eui.ICollection) {
		this._list.dataProvider = dp;
		this.addEventListener(egret.Event.ENTER_FRAME, this._onEnterFrame, this);
	}

	public get dataProvider(): eui.ICollection {
		return this._list.dataProvider;
	}

	public set itemRender(ir: any) {
		this._list.itemRenderer = ir;
		this.addEventListener(egret.Event.ENTER_FRAME, this._onEnterFrame, this);
	}

	public get itemRender(): any {
		return this._list.itemRenderer;
	}

	public set itemRendererSkinName(value: any) {
		this._list.itemRendererSkinName = value;
	}

	public get itemRendererSkinName(): any {
		return this._list.itemRendererSkinName;
	}

	public set selectedIndex(value: number) {
		this._list.selectedIndex = value;
	}

	public get selectedIndex(): number {
		return this._list.selectedIndex;
	}

	public set selectedItem(value: any) {
		this._list.selectedItem = value;
	}

	public get selectedItem(): any {
		return this._list.selectedItem;
	}

	public set allowMultipleSelection(value: boolean) {
		this._list.allowMultipleSelection = value;
	}

	public get allowMultipleSelection(): boolean {
		return this._list.allowMultipleSelection;
	}

	public get selectedIndices(): any {
		return this._list.selectedIndices;
	}

	public get useVirtualLayout(): boolean {
		return this._list.useVirtualLayout;
	}

	public set useVirtualLayout(v: boolean) {
		this._list.useVirtualLayout = v;
	}

	public set layout(value: any) {
		this._list.layout = value;
	}

	public get layout(): any {
		return this._list.layout;
	}

	public getTileLayout(): eui.TileLayout {
		return new eui.TileLayout;
	}

	public getVerticalLayout(): eui.VerticalLayout {
		return new eui.VerticalLayout;
	}

	private _onEnterFrame() {
		this.removeEventListener(egret.Event.ENTER_FRAME, this._onEnterFrame, this);
		this._onResize();

		let dp = this._list.dataProvider;
		let noDataTxt = this._doDateTxt;
		if (dp && dp.length == 0) {
			if (!noDataTxt) {
				noDataTxt = this._doDateTxt = new eui.Label("目前列表为空");
				noDataTxt.size = 18;
				this.addChild(noDataTxt);
				noDataTxt.horizontalCenter = 0;
				noDataTxt.verticalCenter = 0;
			}
		}

		if (noDataTxt) {
			noDataTxt.visible = (dp.length == 0);
		}

	}
}