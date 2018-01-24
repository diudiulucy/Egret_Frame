/**
 * 数组工具
 * @author chenkai
 * @date 2016/7/19
 */
module ArrayUtils {
	/**
	 * 定义一个Map,索引值为number;
	 */
	export interface Map<T> {
		[key:number]:T;
	}

	/**
	 * 数组升序排列
	 * @param arr 待排序的数组
	 * @returns 已排序的数组
	 */
	export function sortByAsc(arr: Array<any>) {
		arr.sort(function (a, b) {
			return a - b;
		});
	}

	/**
	 * 获取object长度
	 * @param obj 待判断Object
	 * @returns object长度
	 */
	export function getObjectLength(obj): number {
		var count = 0;
		for (var key in obj) {
			count++;
		}
		return count;
	}


	/**
	 * 根据值来删除数组元素
	 * @param arr 数组
	 * @returns value 值
	 */
	export function deleteByValue(arr:Array<any>,value:any){
		let index = arr.indexOf(value);
		index !=-1 && arr.splice(index,1)
	}

	/**
	 * 数组的深拷贝
	 */
	export function DeepCopy(arr:Array<any>){
		return [].concat(JSON.parse(JSON.stringify(arr)));
	}

	export function isEmptyObject(object){
		// return (JSON.stringify(object) == "{}"); //或者用此方法来判定
		let arr = Object.keys(object);
		return (arr.length == 0);
	}
}