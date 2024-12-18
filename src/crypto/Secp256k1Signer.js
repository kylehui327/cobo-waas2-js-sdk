import { ec as EC } from 'elliptic';

const ec = new EC('secp256k1');

export default class Secp256k1Signer {
    constructor(privateKey) {
        this.privateKey = privateKey;
        this.keyPair = ec.keyFromPrivate(privateKey, 'hex');
    }

    sign(message) {
        const messageHash = Buffer.from(message, 'hex');
        const signature = this.keyPair.sign(messageHash, { canonical: true });
        return Buffer.from(signature.toDER()).toString('hex');
    }

    getPublicKey() {
        return this.keyPair.getPublic(true, 'hex');
    }
}
