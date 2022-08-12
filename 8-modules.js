// GLOBALS - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJs)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// common Js, every file is module (by default)
// Modules  - Encapsulated code (only share minimium)



const {john,peter} = require('./4-names')
const sayHi = require('./5-utils')

// console.log(names);
const data = require('./6-alternative-flavour')

console.log(data);

require('./7-mind-grenade')



sayHi('susam')
sayHi(john)
sayHi(peter)