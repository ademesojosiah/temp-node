const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`name is ${name} and id is : ${id}`);
})



customEmitter.emit('response','john',2)