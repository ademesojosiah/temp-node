const {readFile,writeFile} = require('fs')

console.log('start');

readFile('./content/first.txt','utf8',(err,result)=>{
    err && console.log(err)
    const first = result;
    readFile('./content/second.txt','utf8', (err,result)=>{
        err && console.log(err);
        const second = result
        writeFile('./content/result-async',`Here is the result : ${first}, ${second}`,
        (err,result)=>{
            err && console.log(err );
            console.log('im loading');
        }
      )})
})

console.log('end');