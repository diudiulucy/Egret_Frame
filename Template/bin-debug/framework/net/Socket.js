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
      */
    Socket.prototype.closeSocket = function () {
        this._socket.removeEventListener(egret.Event.CONNECT, this._onSocketConnected, this);
        this._socket.removeEventListener(egret.Event.CLOSE, this._onSocketClose, this);
        this._socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this._onSocketError, this);
        this._socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this._onReceiveMessage, this);
        this._socket.connected && this._socket.close();
    };
    /**
     * socket是否已连接
     *
     */
    Socket.prototype.isConnected = function () {
        if (this._socket && this._socket.connected) {
            return true;
        }
        return false;
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
        egret.log("_onReceiveMessage");
        this._unPack();
    };
    /**
     * 发送数据
     *
     */
    Socket.prototype.sendData = function (mainID, data, AssistantID) {
        if (this._socket && this._socket.connected) {
            console.log("Send: mainID = " + mainID + " data = " + data);
            var bytes = this._pack(mainID, data, AssistantID);
            this._socket.writeBytes(bytes);
        }
        else {
            egret.log("socket is not connected");
        }
    };
    Socket.prototype._unPack = function () {
        var byte = new egret.ByteArray();
        this._socket.readBytes(byte);
        byte.endian = egret.Endian.LITTLE_ENDIAN;
        var len = byte.readInt();
        var mainID = byte.readInt();
        var assistantID = byte.readInt();
        var bodyBytes = new egret.ByteArray();
        bodyBytes.readBytes(bodyBytes, 0, len - Socket._headSize);
        var data = CryptoUtils.Base64AES(bodyBytes, Socket._AESKEY);
        console.log("Receive: mainID = " + mainID + " data = " + data);
        EventManager.getInstance().dispatchCustomEvent(mainID.toString(), data);
    };
    Socket.prototype._pack = function (mainID, data, AssistantID) {
        if (AssistantID === void 0) { AssistantID = 0; }
        // let bodyBytes = CryptoUtils.AESBase64(data, Socket._AESKEY);
        var bytes = new egret.ByteArray();
        bytes.endian = egret.Endian.LITTLE_ENDIAN;
        bytes.position = 0;
        var body = new egret.ByteArray();
        bytes.endian = egret.Endian.LITTLE_ENDIAN;
        // body.writeBytes(bodyBytes,0,bodyBytes.byteLength);
        var len = Socket._headSize + body.length;
        bytes.writeInt(len);
        bytes.writeInt(mainID);
        bytes.writeInt(AssistantID);
        bytes.writeBytes(body, 0, len);
        return bytes;
    };
    Socket._AESKEY = '@ZYHD#GDMJ!112233!love**foreverX';
    Socket._headSize = 12;
    return Socket;
}(Single));
__reflect(Socket.prototype, "Socket");
//# sourceMappingURL=Socket.js.map