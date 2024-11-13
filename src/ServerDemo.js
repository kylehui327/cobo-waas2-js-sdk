const express = require("express");
const nacl = require("tweetnacl");
const CryptoJS = require("crypto-js");

// Logging setup
const logger = console;

// Public keys for different environments
const pubKeys = {
    DEV: "a04ea1d5fa8da71f1dcfccf972b9c4eba0a2d8aba1f6da26f49977b08a0d2718",
    PROD: "8d4a482641adb2a34b726f05827dba9a9653e5857469b8749052bf4458a86729"
};

const pubkey = pubKeys["DEV"];

// Express setup
const app = express();
app.use(express.json({
    verify: (req, res, buf) => {
        req.rawBody = buf.toString();
    }
}));

// Helper function to verify the request signature
function verifyRequest(req, res) {
    const signature = req.headers['biz-resp-signature'];
    const bizTimestamp = req.headers['biz-timestamp'];

    if (!signature || !bizTimestamp) {
        res.status(401).send('Missing signature or timestamp');
        return false;
    }

    const message = `${req.rawBody}|${bizTimestamp}`;
    if (!verifySignature(pubkey, signature, message)) {
        res.status(401).send('Signature verification failed');
        return false;
    }
    return true;
}

// Webhook endpoint
app.post("/api/webhook", (req, res) => {
    if (!verifyRequest(req, res)) return;

    const event = req.body;
    logger.info(event);
    logger.info(event.data);
    // Add your business logic here
    res.sendStatus(201);
});

// Callback endpoint
app.post("/api/callback", (req, res) => {
    if (!verifyRequest(req, res)) return;

    const tx = req.body;
    logger.info(tx);
    // Add your callback logic here
    res.send("ok");
});

// Signature verification function
function verifySignature(publicKey, signature, message) {
    const vk = Buffer.from(publicKey, "hex");

    // Double SHA-256 hash of the message
    const hash2String = CryptoJS.SHA256(CryptoJS.SHA256(message)).toString(CryptoJS.enc.Hex);
    try {
        const signatureBuffer = Buffer.from(signature, "hex");
        const messageBuffer = Buffer.from(hash2String, "hex");
        return nacl.sign.detached.verify(
            messageBuffer,
            signatureBuffer,
            vk
        );
    } catch (error) {
        logger.error("Signature verification failed", error);
        return false;
    }
}

// Server startup
const PORT = 8000;
app.listen(PORT, () => {
    logger.info(`Server running on http://localhost:${PORT}`);
});
