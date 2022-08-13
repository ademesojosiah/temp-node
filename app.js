const http = require('http')
const fs = require('fs')


const server = http.createServer()

server.on('request',(req,res)=>{
    const fileStream = fs.createReadStream('./content/big.txt')
    fileStream.pipe(res)





    // fileStream.on('data',(chunk)=>{
    //     res.write(chunk)
    // })
    // fileStream.on('end',()=>{
    //     res.end()
    // })
    // fileStream.on('error',(err)=>{
    //     res.end(err)
    // })
})

server.listen(5000,()=>{
    console.log('start listening')
})