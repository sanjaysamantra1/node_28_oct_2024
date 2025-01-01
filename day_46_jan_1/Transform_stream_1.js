const { Transform } = require('stream');

const uppercaseTransformStream = new Transform({
    transform(chunk, encoding, callback) {
        const transformedData = chunk.toString().toUpperCase();
        this.push(transformedData);
        callback()
    }
})

uppercaseTransformStream.on('data', (chunk) => {
    console.log('received Chunk:: ', chunk.toString())
});

uppercaseTransformStream.write('Hello,Hiiiiiiiiiiiii, Good Morning','utf-8');
uppercaseTransformStream.write('data from second chunk','utf-8');
uppercaseTransformStream.write('data from third chunk','utf-8');
uppercaseTransformStream.end();