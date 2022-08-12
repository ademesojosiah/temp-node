// const os = require('os')

// const user = os.userInfo()

// console.log(user);


// //method returns the system update in seconds

// console.log(`the system Uptime is ${os.uptime()} seconds`);

// const currentOs ={
//     name: os.type(),
//     release: os.release(),
//     totalMen : os.totalmem(),
//     freeMen: os.freemem()
// }

// console.log(currentOs);

const path = require('path')

console.log(path.sep);

const filePath = path.join('/content/', 'subfolder','test.txt')

console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);
 