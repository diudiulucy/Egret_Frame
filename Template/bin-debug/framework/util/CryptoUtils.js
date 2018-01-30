/**
 * CryptoUtils类,加密解密类
 * @author lucywang
 * @date 2017/10/19
 */
var CryptoUtils;
(function (CryptoUtils) {
    function AESBase64(toEncrypt, key) {
        var base64Str = CryptoUtils.AESEncrypt(toEncrypt, key);
        return egret.Base64Util.decode(base64Str);
    }
    CryptoUtils.AESBase64 = AESBase64;
    /**
     * AES加密
     */
    function AESEncrypt(plaintext, pwd) {
        var key = CryptoJS.enc.Utf8.parse(pwd);
        var encryptData = CryptoJS.AES.encrypt(plaintext, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encryptData.toString();
    }
    CryptoUtils.AESEncrypt = AESEncrypt;
    /**
     * AES解密
     */
    function AESDecrypt(encryptedStr, pwd) {
        var key = CryptoJS.enc.Utf8.parse(pwd);
        var decryptedData = CryptoJS.AES.decrypt(encryptedStr, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return decryptedData.toString(CryptoJS.enc.Utf8);
    }
    CryptoUtils.AESDecrypt = AESDecrypt;
    function Base64AES(word, pwd) {
        var str = egret.Base64Util.encode(word.buffer);
        return AESDecrypt(str, pwd);
    }
    CryptoUtils.Base64AES = Base64AES;
})(CryptoUtils || (CryptoUtils = {}));
//# sourceMappingURL=CryptoUtils.js.map