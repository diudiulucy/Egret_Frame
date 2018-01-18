/**
 * @author lucywang
 * @date 2018/01/04
 */
class TabStackView extends eui.Component {
	private _TabViewGroup:eui.Group;
	private _tabBar: eui.TabBar;

	private _viewStackGroup:eui.Group;
	private _viewStack: eui.ViewStack;
	
	public constructor() {
		super();
		this._init();
	}

	private _init() {
		this._TabViewGroup = new eui.Group();
		this._TabViewGroup.layout = this.getVerticalLayout();
		this.addChild(this._TabViewGroup);

		this._tabBar = new eui.TabBar();
		this._TabViewGroup.addChild(this._tabBar);

		this._viewStackGroup = new eui.Group();
		this._TabViewGroup.addChild(this._viewStackGroup);

		this._viewStack = new eui.ViewStack();
		this._tabBar.dataProvider = this._viewStack;
		this._viewStackGroup.addChild(this._viewStack);
	}

	public addTabViews(views: Array<eui.Group>) {
		views.forEach(function(item,index,input){
			this._viewStack.addChild(item);
		},this);
		
	}

	public set itemRendererSkinName(value: any) {
		this._tabBar.itemRendererSkinName = value;
	}

	public get itemRendererSkinName(): any {
		return this._tabBar.itemRendererSkinName;
	}

	public set viewWidth(value:number) {
		this._viewStack.width = value;
	}

	public set viewHeight(value:number){
		this._viewStack.height = value;
	}

	public set stackViewBg(src:string){
		let img = new eui.Image();
		img.source = RES.getRes(src);
		img.percentWidth = 100;
		img.percentHeight = 100;
		img.scale9Grid =  new egret.Rectangle(42,47,88,71);
		this._viewStackGroup.addChildAt(img,0);
	}

	public set selectedIndex(value: number) {
		this._viewStack.selectedIndex = value;
	}

	public get selectedIndex(): number {
		return this._viewStack.selectedIndex;
	}


	public set tabLayout(value: any) {
		this._tabBar.layout = value;
	}

	public get tabLayout(): any {
		return this._tabBar.layout;
	}

	public getTileLayout(): eui.TileLayout {
		return new eui.TileLayout;
	}

	public getVerticalLayout(): eui.VerticalLayout {
		return new eui.VerticalLayout;
	}

}