'use strict';


const { argv: [,,...args] } = process

var prompt = require('prompt')

prompt.start()

prompt.get([''], function (err, result) {
  console.log('command-line input received:')
  console.log(result)
  console.log(args)
})
module.exports = () => {

}

// the entire list of products should populate the terminal, all items must come back to the list after added
