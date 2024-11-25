const os = require('os');

console.log(os.arch()); // x64
console.log(os.availableParallelism()); // 8
console.log(os.cpus().length + ' core'); // 8
console.log(os.totalmem() / 1024 / 1024 / 1024 + ' GB'); // 
console.log(os.freemem() / 1024 / 1024 / 1024 + ' GB'); // 
console.log(os.homedir());  
console.log(os.tmpdir());  
console.log(os.platform());   // win32
console.log(os.release());  // 10.0.22631
console.log(os.type());  // Windows_NT
console.log(os.version());  // Windows 11 Home Single Language

console.log(os.userInfo())
console.log(os.uptime()/60/60/24+"days")