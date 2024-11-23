console.log('Dir name is:: ', __dirname)
console.log('File name is:: ', __filename)

let myPassword = 'sanjay1234';
let encryptedPwd = btoa(myPassword);
console.log('encryptedPwd ', encryptedPwd);

let originalPwd = atob(encryptedPwd);
console.log('originalPwd ', originalPwd)