/**
 * Socket协议类(只做协议的处理)
 * @author lucywang
 * @date 2017/10/19
 */
class Socket extends Single {
	private _socket: egret.WebSocket;
	private static readonly _AESKEY: string = '@ZYHD#GDMJ!112233!love**foreverX';
	private static readonly _headSize: number = 12;
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
		egret.log("_onReceiveMessage");
		this._unPack();
	}

	/**
	 * 发送数据
	 * 
	 */
	public sendData(mainID: number, data?: string, AssistantID?: number) {
		if (this._socket && this._socket.connected) {
			console.log("Send: mainID = " + mainID + " data = " + data);
			let bytes: egret.ByteArray = this._pack(mainID, data, AssistantID);
			this._socket.writeBytes(bytes);
		} else {
			egret.log("socket is not connected");
		}
	}

	private _unPack(): void {
		let byte: egret.ByteArray = new egret.ByteArray();
		this._socket.readBytes(byte);
		byte.endian = egret.Endian.LITTLE_ENDIAN;
		let len = byte.readInt();
		let mainID = byte.readInt();
		let assistantID = byte.readInt();

		let bodyBytes: egret.ByteArray = new egret.ByteArray();
		bodyBytes.readBytes(bodyBytes, 0, len - Socket._headSize);

		let data = CryptoUtils.Base64AES(bodyBytes, Socket._AESKEY);
		console.log("Receive: mainID = " + mainID + " data = " + data);
		EventManager.getInstance().dispatchCustomEvent(mainID.toString(), data);
	}


	private _pack(mainID: number, data: string, AssistantID: number = 0): egret.ByteArray {
		// let bodyBytes = CryptoUtils.AESBase64(data, Socket._AESKEY);
		let bytes: egret.ByteArray = new egret.ByteArray();
		bytes.endian = egret.Endian.LITTLE_ENDIAN;
		bytes.position = 0;

		let body: egret.ByteArray = new egret.ByteArray();
		bytes.endian = egret.Endian.LITTLE_ENDIAN;

		// body.writeBytes(bodyBytes,0,bodyBytes.byteLength);


		let len = Socket._headSize + body.length;
		bytes.writeInt(len);
		bytes.writeInt(mainID);
		bytes.writeInt(AssistantID);

		bytes.writeBytes(body, 0, len);

		return bytes;
	}

}