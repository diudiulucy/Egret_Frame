/**
 * 
 * 帧管理器
 * @author lucywang
 * @date 2018/01/18
 */
class FrameManager extends Single {
	private _funsArray: Array<any> = [];
	private _funDic: Object = {};

	//构造函数必须私有
	private constructor() {
		super();
		let stage = egret.MainContext.instance.stage;
		stage.addEventListener(egret.Event.ENTER_FRAME, this._loopHandler, this);
	}

	public static get Instance(): FrameManager {
		return this.getInstance();
	}

	private _loopHandler() {
		this._doFrame();
	}

	/**
	 * 遍历所有的行为帧
	 */
	private _doFrame(): void {
		let arr: Array<any> = this._funsArray;
		if (arr.length == 0) return;
		for (let i = arr.length - 1; i >= 0; i--) {
			let handler: Handler = arr[i];
			if (handler && handler.method) {
				handler.method.call(handler.thisObj);
			}
		}
	}


	/**
	 * 添加帧
	 */
	public addFrame(key: any, func: Function, thisObj: any): void {
		if (!this._funDic[key]) {
			var handler: Handler = new Handler(func, thisObj);
			this._funDic[key] = handler;
			this._funsArray.push(handler);

		}
	}


	/**
	 * 删除帧
	 */
	public removeFrame(key: any): void {
		let handler: Handler = this._funDic[key];
		if (!handler) return;
		let arr = this._funsArray;
		if (arr.length == 0) return;
		let index = arr.indexOf(handler);
		if (index != -1) {
			arr.splice(index, 1);
			handler.dispose();
			this._funDic[key] = null;
			delete this._funDic[key];
		}

	}

}