'use strict';

const { argv: [,,...args] } = process

var prompt = require('prompt')

prompt.start()

prompt.get(['Which customer is active?'], function (err, result) {
  console.log('command-line input received:')
  console.log(result)
  console.log(args)
})


module.exports = () => {
 return {}
}


// returns object
