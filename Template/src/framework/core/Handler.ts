/**
 * 针对回调方式封装的类
 * @author lucywang
 * @date 2018/01/18
 */
class Handler {
	public method: Function;   //处理的函数
	public thisObj: any;        //处理函数的对象

	public constructor(method: Function = null, thisObj: any = null) {
		this.method = method;
		this.thisObj = thisObj;
	}

	public dispose() {
		this.method = null;
		this.thisObj = null;
	}

	public static create(menthod: Function = null, thisObj: any = null): Handler {
		return new Handler(menthod, thisObj);
	}
}