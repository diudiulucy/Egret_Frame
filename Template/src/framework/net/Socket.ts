/**
 * Socket协议类(只做协议的处理)
 * @author lucywang
 * @date 2017/10/19
 */
class Socket extends Single {
	private _socket: egret.WebSocket;

	private constructor() {
		super();
		this._createSocket();
	}

	//为方便代码提示，加入此接口
	public static get Instance(): Socket {
		return this.getInstance();
	}

	private _createSocket() {
		this._socket = new egret.WebSocket();
		this._socket.type = egret.WebSocket.TYPE_BINARY;
		this._socket.addEventListener(egret.Event.CONNECT, this._onSocketConnected, this);
		this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this._onReceiveMessage, this);
		this._socket.addEventListener(egret.Event.CLOSE, this._onSocketClose, this);
		this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this._onSocketError, this);
	}

	/**
	  * 开始根据提供的url连接socket
	  * @param url  全地址。如ws://echo.websocket.org:80
	  *
	  */
	public startConnect(url: string) {
		egret.log("start connect " + url);
		this._socket.connectByUrl(url);
	}

	/**
	  * 关闭socket
	  */
	public closeSocket(): void {
		this._socket.removeEventListener(egret.Event.CONNECT, this._onSocketConnected, this);
		this._socket.removeEventListener(egret.Event.CLOSE, this._onSocketClose, this);
		this._socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this._onSocketError, this);
		this._socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this._onReceiveMessage, this);
		this._socket.connected && this._socket.close();
	}

	/**
	 * socket是否已连接
	 * 
	 */
	public isConnected() {
		if (this._socket && this._socket.connected) {
			return true;
		}
		return false;
	}

	/**
	 * 连接成功回调
	 */
	private _onSocketConnected(event: egret.Event): void {
		egret.log("socket connect successed");
	}

	/**
	 * 连接关闭回调
	 */
	private _onSocketClose(event: egret.Event): void {
		egret.log("onSocketClose");
	}

	/**
	 * 连接错误回调
	 */
	private _onSocketError(event: egret.IOErrorEvent): void {
		egret.log("_onSocketError");
	}

	/**
	 * 接收数据回调
	 */
	private _onReceiveMessage(event: egret.ProgressEvent): void {

	}

	/**
	 * 发送数据
	 * 
	 */
	public sendData(mainID: number, data?: string, AssistantID?: number) {
		if(this._socket && this._socket.connected){
			console.log(JSON.stringify({mainID:mainID,data:data}));
			
		}
	}

}