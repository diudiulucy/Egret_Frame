var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * Socket协议类(只做协议的处理)
 * @author lucywang
 * @date 2017/10/19
 */
var Socket = (function (_super) {
    __extends(Socket, _super);
    function Socket() {
        var _this = _super.call(this) || this;
        _this._createSocket();
        return _this;
    }
    Object.defineProperty(Socket, "Instance", {
        //为方便代码提示，加入此接口
        get: function () {
            return this.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Socket.prototype._createSocket = function () {
        this._socket = new egret.WebSocket();
        this._socket.type = egret.WebSocket.TYPE_BINARY;
        this._socket.addEventListener(egret.Event.CONNECT, this._onSocketConnected, this);
        this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this._onReceiveMessage, this);
        this._socket.addEventListener(egret.Event.CLOSE, this._onSocketClose, this);
        this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this._onSocketError, this);
    };
    /**
      * 开始根据提供的url连接socket
      * @param url  全地址。如ws://echo.websocket.org:80
      *
      */
    Socket.prototype.startConnect = function (url) {
        egret.log("start connect " + url);
        this._socket.connectByUrl(url);
    };
    /**
      * 关闭socket
      *
      */
    Socket.prototype.closeSocket = function () {
        this._socket.removeEventListener(egret.Event.CONNECT, this._onSocketConnected, this);
        this._socket.removeEventListener(egret.Event.CLOSE, this._onSocketClose, this);
        this._socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this._onSocketError, this);
        this._socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this._onReceiveMessage, this);
        this._socket.close();
    };
    /**
     * 连接成功回调
     */
    Socket.prototype._onSocketConnected = function (event) {
        egret.log("socket connect successed");
    };
    /**
     * 连接关闭回调
     */
    Socket.prototype._onSocketClose = function (event) {
        egret.log("onSocketClose");
    };
    /**
     * 连接错误回调
     */
    Socket.prototype._onSocketError = function (event) {
        egret.log("_onSocketError");
    };
    /**
     * 接收数据回调
     */
    Socket.prototype._onReceiveMessage = function (event) {
    };
    /**
     * 发送数据
     *
     */
    Socket.prototype.sendData = function (mainID, data, AssistantID) {
    };
    return Socket;
}(Single));
__reflect(Socket.prototype, "Socket");
//# sourceMappingURL=Socket.js.map