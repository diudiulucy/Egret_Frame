/**
 * 错误码管理
 * @author lucywang
 * @date 2017/10/19
 */
class ErrorCodeManager extends Single {
	private map: Object = {};

	public static get Instance(): ErrorCodeManager {
		return this.getInstance();
	}

	public init(url: string): void {
		let str: string = <string>RES.getRes(url);
		console.assert(str != "", "read file failed");
		str.replace(/\r/g, "");
		var allData: string[] = str.split("\n");
		allData.forEach(element => {
			if (element.indexOf(":") != -1) {
				let oneData: string[] = element.split(":");
				this.map[oneData[0]] = oneData[1];
			}
		});
	}

	public getErrorCode(code: number): string {
		let msg: string = this.map[code];
		return msg || "code not found" + code;
	}
}
