/**
 * 层级类,只处理UI上的逻辑(一个layer对应一个controller,处理和后端的交互)
 * @author lucywang
 * @date 2017/01/09
 */
class Layer extends eui.Component {
	protected TAG: string = "";
	protected CustomUIEventList: Array<any> = null;
	public constructor() {
		super();
		this.TAG = egret.getQualifiedClassName(this);
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onDestroy, this);
	}

	protected init(): void {
		console.log(this.TAG + " init");
		this._registerCustomUIEventsList(true);
		this.setOnTouchListener();
		this.watchData();
	}


	/**
	  * 进行数据的监视
	  */
	protected watchData() {

	}

	private _registerCustomUIEventsList(isRegister: boolean) {
		if (!this.CustomUIEventList) return;
		for (let value of this.CustomUIEventList) {
			let eventName: string = value.toString();
			let funcName: string = "ui_" + eventName;
			if (this[funcName]) {
				if (isRegister) {
					EventManager.getInstance().register(eventName, this[funcName], this);
				} else {
					EventManager.getInstance().unRegister(eventName, this[funcName], this);
				}
			} else {
				console.error(`未添加${this.TAG}的${funcName}的监听`);
			}
		}
	}

	// 触摸消息的注册全在这里操作
	protected setOnTouchListener() {
		// console.log(this.TAG + " setOnTouchListener");
	}

	protected removeOnTouchListener() {
		// console.log(this.TAG + " removeOnTouchListener");
	}

	protected onDestroy() {
		console.log(this.TAG + " onDestroy");
		this._registerCustomUIEventsList(false);
		this.removeOnTouchListener();
		this.CustomUIEventList = null;
	}

}