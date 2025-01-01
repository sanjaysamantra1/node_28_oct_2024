// Encryption/Decryption
const { Duplex } = require('stream');
const crypto = require('crypto');

class myDuplexStream extends Duplex {
    constructor(options) {
        super(options);
        this.key = crypto.randomBytes(32);
        this.iv = crypto.randomBytes(16); // initialization vector
    }
    _read(size) { }
    _write(chunk, encoding, callback) {
        const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.iv);
        let encrypted = cipher.update(chunk);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        this.push(encrypted);
        callback();
    }
}

const myDuplexObj = new myDuplexStream();

myDuplexObj.on('data', (chunk) => {
    console.log('received ancrypted Data:: ', chunk.toString('hex'))
});
myDuplexObj.write('Hello,Hiiiiiiiiiiiii, Good Morning','utf-8');
myDuplexObj.write('data from second chunk','utf-8');
myDuplexObj.write('data from third chunk','utf-8');
myDuplexObj.end();