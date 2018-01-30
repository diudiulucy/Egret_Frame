/**
 * CryptoUtils类,加密解密类
 * @author lucywang
 * @date 2017/10/19
 */
module CryptoUtils {
    export function AESBase64(toEncrypt: string, key: string):ArrayBuffer{
        let base64Str = CryptoUtils.AESEncrypt(toEncrypt, key);
        return  egret.Base64Util.decode(base64Str);
    }

    /**
     * AES加密
     */
    export function AESEncrypt(plaintext, pwd) {
        let key = CryptoJS.enc.Utf8.parse(pwd);
        let encryptData = CryptoJS.AES.encrypt(plaintext, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encryptData.toString();
    }

    
    /**
     * AES解密
     */
    export function AESDecrypt(encryptedStr, pwd) {
        var key = CryptoJS.enc.Utf8.parse(pwd);
        var decryptedData = CryptoJS.AES.decrypt(encryptedStr, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });

        return decryptedData.toString(CryptoJS.enc.Utf8);
    }

    export function Base64AES(word, pwd) {
        let str = egret.Base64Util.encode(word.buffer);
        return AESDecrypt(str,pwd);
    }

}