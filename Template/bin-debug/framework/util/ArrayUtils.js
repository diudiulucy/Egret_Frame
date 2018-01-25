/**
 * 数组工具
 * @author chenkai
 * @date 2016/7/19
 */
var ArrayUtils;
(function (ArrayUtils) {
    /**
     * 数组升序排列
     * @param arr 待排序的数组
     * @returns 已排序的数组
     */
    function sortByAsc(arr) {
        arr.sort(function (a, b) {
            return a - b;
        });
    }
    ArrayUtils.sortByAsc = sortByAsc;
    /**
     * 获取object长度
     * @param obj 待判断Object
     * @returns object长度
     */
    function getObjectLength(obj) {
        var count = 0;
        for (var key in obj) {
            count++;
        }
        return count;
    }
    ArrayUtils.getObjectLength = getObjectLength;
    /**
     * 根据值来删除数组元素
     * @param arr 数组
     * @returns value 值
     */
    function deleteByValue(arr, value) {
        var index = arr.indexOf(value);
        index != -1 && arr.splice(index, 1);
    }
    ArrayUtils.deleteByValue = deleteByValue;
    /**
     * 数组的深拷贝
     */
    function DeepCopy(arr) {
        return [].concat(JSON.parse(JSON.stringify(arr)));
    }
    ArrayUtils.DeepCopy = DeepCopy;
    function isEmptyObject(object) {
        // return (JSON.stringify(object) == "{}"); //或者用此方法来判定
        var arr = Object.keys(object);
        return (arr.length == 0);
    }
    ArrayUtils.isEmptyObject = isEmptyObject;
    /**
     * 字符串转换为arrybuffer
     * @param str
     */
    function strToArrayBuffer(str) {
        var buffer = new ArrayBuffer(str.length);
        var bufView = new Uint8Array(buffer);
        for (var i = 0; i < str.length; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buffer;
    }
    ArrayUtils.strToArrayBuffer = strToArrayBuffer;
})(ArrayUtils || (ArrayUtils = {}));
//# sourceMappingURL=ArrayUtils.js.map