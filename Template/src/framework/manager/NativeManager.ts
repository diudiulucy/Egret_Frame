/**
 * 和原生通讯的管理器,防止建立很多全局函数导致命名冲突问题
 * @author lucywang
 * @date 2018/01/25
 * 
 */

/**
 * 原生注册的函数名称
 */
enum NativeFunc {
    callNative,             
}

class NativeManager extends Single {

    /**
     * 构造函数私有
     */
    private constructor() {
        super();
        this._setNativeInterface();
    }

    public static get Instance(): NativeManager {
        return this.getInstance();
    }

    /**
     * 注册原生的回调函数
     */
    private _setNativeInterface() {
        egret.ExternalInterface.addCallback("CallJS", this._callJS);
    }

    private _callJS(msg:string) {
        console.log(msg);    
    }

    /**
     * 调用原生的接口，权限为public
     */
    public callNative(nativeFunc:NativeFunc,value:string) {
        console.log(NativeFunc[nativeFunc]);
        egret.ExternalInterface.call(NativeFunc[nativeFunc], value);
    }

}