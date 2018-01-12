/**
 * Http请求类
 使用如下：
		LC.Http.post("http://httpbin.org/post", { id: 1, level: 1 }, (e) => {
				var request = e.currentTarget;
				console.log("post data : ", request.response);
			}, this);

			LC.Http.get("http://httpbin.org/get", { id: 1, level: 1 }, (e) => {
				var request = e.currentTarget;
				console.log("get data : ", request.response);
			}, this);
 * @author lucywang
 * @date 2018/01/12
 */
class Http {

	/**
      * 发送post请求
      * @param url 		     路径
 	  * @param data 		 数据
      * @param success  	 成功的回调
      * @param thisObject    调用回调的对象
      * @param error 	     失败的回调
      */
	public static post(url: string, data?: any, success?: Function, thisObject?: any, error?: Function, progress?: Function): void {
		console.log("post url = " + url);
		let request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		request.open(url, egret.HttpMethod.POST);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		if (data) {
			if (data instanceof Object) {
				let param = this.changeUrlCode(data);
				request.send(param);
			} else {
				request.send(data);
			}

		} else {
			request.send();
		}

		success && request.addEventListener(egret.Event.COMPLETE, success, thisObject);
		error && request.addEventListener(egret.IOErrorEvent.IO_ERROR, error, thisObject);
		progress && request.addEventListener(egret.ProgressEvent.PROGRESS, progress, thisObject);
	}

	/**
	  * 发送get请求
	  * @param url 		路径
	  * @param data 	数据
	  * @param success  成功的回调
	  * @param error 	失败的回调
	  */
	public static get(url: string, data?: any, success?: Function, thisObject?: any, error?: Function): void {
		console.log("get url = " + url);
		let request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		if (data) {
			let param = this.changeUrlCode(data);
			request.open(url + "?" + param, egret.HttpMethod.GET);
		} else {
			request.open(url, egret.HttpMethod.GET);
		}
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send();

		success && request.addEventListener(egret.Event.COMPLETE, success, thisObject);
		error && request.addEventListener(egret.IOErrorEvent.IO_ERROR, error, thisObject);
	}

	private static changeUrlCode(param: any): string {
		if (!param) return null;
		let str: string = "";
		for (let key in param) {
			str += key + "=" + param[key] + "&";
		}
		return str.substr(0, str.length - 1);
	}
}