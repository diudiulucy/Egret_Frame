/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {

    getUserInfo(): Promise<any>;    //获取用户信息

    init(): Promise<any>;           //第三方平台初始化

    login(): Promise<any>;          //第三方平台登录

    payOrder(gid):Promise<any>;     //下订单

    pay(goodsId): Promise<any>;     //唤起支付
}

class DebugPlatform implements Platform {
    
    async getUserInfo() {
        return { nickName: "username" }
    }

    async init() {

    }

    async login() {

    }

    async pay(goodsId) {

    }

    async payOrder(gid){

    };
}


if (!window.platform) {
    // window.platform = new EgretPlatform();
    window.platform = new DebugPlatform();
}

declare let platform: Platform;

declare interface Window {

    platform: Platform
}





