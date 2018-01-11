/**
 * 单例类
 * @author lucywang
 * @date 2017/10/19
 */
class Single {
	//实例必须私有
	private static _instance: any;

	//构造函数必须保护型才算真正的单例,这里子类要访问所以是保护类型，严格的得用私有
	protected constructor() {

	}

	protected static getInstance() {
		let clsName = egret.getQualifiedClassName(this);
		let cls = egret.getDefinitionByName(clsName);
		if (!this._instance) {
			this._instance = new cls();
		}

		return this._instance;
	}

	/** 为方便提示，子类最好加入此接口
		 public static get Instance(): T {
			 return this.getInstance();
		 }
	*/

}
