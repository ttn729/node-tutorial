// console.log(__dirname)
// console.log(__filename);

const names = require('./names')
const sayHi = require('./utils')

// console.log(names)


sayHi('susan')
sayHi(names.peter)
sayHi(names.john)


// setInterval(() => {
//     console.log("I like you em")
// }, 1000)