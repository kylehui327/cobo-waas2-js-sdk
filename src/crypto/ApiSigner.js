import * as CryptoJS from 'crypto-js';
import {sign as ed25519} from 'tweetnacl'

export default class ApiSigner {
    constructor(privateKey) {
        this.privateKey= privateKey
    }

    generateHeaders(path, method, body, queryString) {
        const nonce = String(new Date().getTime());
        const strToSign = [method, path, nonce, queryString, body?JSON.stringify(body):''].join('|');
        console.log("strToSign:", strToSign)
        const hash2String = CryptoJS.SHA256(CryptoJS.SHA256(strToSign)).toString(CryptoJS.enc.Hex);
        return {
            'BIZ-API-KEY': this.getPublicKey(this.privateKey),
            "BIZ-API-NONCE": nonce,
            "BIZ-API-SIGNATURE": this.sign(hash2String, this.privateKey)
        }
    }

    sign(message, sk) {
        const pk = this.getPublicKey(sk)
        const skBytes = new Uint8Array(Buffer.from(sk + pk, 'hex'));
        const messageBytes = new Uint8Array(Buffer.from(message, 'hex'));
        const signature = ed25519.detached(messageBytes, skBytes);
        return Buffer.from(signature).toString('hex');
    }

    getPublicKey(sk) {
        const skBytes = new Uint8Array(Buffer.from(sk, 'hex'));
        const pk = ed25519.keyPair.fromSeed(skBytes).publicKey;
        return Buffer.from(pk).toString('hex');
    }
}
