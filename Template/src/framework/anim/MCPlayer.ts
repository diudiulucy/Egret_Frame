/**
 * 序列帧动画播放,可以在编辑器中设置mclink的属性即可绑定，不会立即刷新，只有在运行的时候才会刷新
 * @author lucywang
 * @date 2018/01/16
 * 
 */
class MCPlayer extends eui.Component {
	private _mc: egret.MovieClip;
	private _mcLink: string;
	private _mcDataFactory: egret.MovieClipDataFactory;

	public constructor() {
		super();
	}

	protected createChildren() {
		super.createChildren();
		this._mc = new egret.MovieClip();
		this._mc.movieClipData = this._mcDataFactory.generateMovieClipData(this._mcLink);
		this.anchorOffsetX = this.width / 2;
		this.anchorOffsetY = this.height / 2;
		this.horizontalCenter = 0;
		this.verticalCenter = 0;
		this.addChild(this._mc);
		this.play(-1);
	}

	public get MC(): egret.MovieClip {
		return this._mc;
	}

	public set mcLink(value: string) {
		this._mcLink = value;
		let data: any = RES.getRes(value + "_mc_json");
		let texture: any = RES.getRes(value + "_tex_png");
		this._mcDataFactory = new egret.MovieClipDataFactory(data, texture);
	}

	public get mcLink() {
		return this._mcLink;
	}

	public stop(): void {
		this._mc && this._mc.stop();
	}

	public play(playtimes: number): void {
		this._mc && this._mc.play(playtimes);
	}
}