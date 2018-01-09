/**
 * @author lucywang
 * @date 2018/01/04
 */
class PlayerStateItemRender extends eui.ItemRenderer{
	private usernameTxt:eui.Label;
	private onlineTxt:eui.Label;

	public constructor() {
		super();

		// this.usernameTxt = new eui.Label();
		// this.usernameTxt.left = 10;
		// this.addChild(this.usernameTxt);

		// this.onlineTxt = new eui.Label();
		// this.onlineTxt.right = 10;
		// this.addChild(this.onlineTxt);

		// this.height = 80;
	}

	protected dataChanged(){
		this.usernameTxt.text = this.data.username;
		this.onlineTxt.text = this.data.online == true ? "在线":"离线";
	}
}