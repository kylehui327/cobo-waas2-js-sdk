import {sign as ed25519} from 'tweetnacl'

export default class Ed25519Signer {
    constructor(privateKey) {
        this.privateKey= privateKey
    }

    sign(message_hash) {
        const pk = this.getPublicKey(this.privateKey)
        const skBytes = new Uint8Array(Buffer.from(this.privateKey + pk, 'hex'));
        const messageBytes = new Uint8Array(Buffer.from(message_hash, 'hex'));
        const signature = ed25519.detached(messageBytes, skBytes);
        return Buffer.from(signature).toString('hex');
    }

    getPublicKey() {
        const skBytes = new Uint8Array(Buffer.from(this.privateKey, 'hex'));
        const pk = ed25519.keyPair.fromSeed(skBytes).publicKey;
        return Buffer.from(pk).toString('hex');
    }
}
