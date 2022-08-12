const http = require('http')

const server = http.createServer((req,res)=>{
   if (req.url === '/'){
       return res.end('welcome to our homepagee')
   }
   if (req.url === '/about'){
       return res.end('here is our short history')
   }else{
   return res.end(`
   <h1>Oops!!</h1>
   <p>We cant deem to find the page you are loooking for</p>
   <a href="/"> back home</a>`)
   }
})

server.listen(5000)