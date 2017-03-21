const prompt = require('prompt')

module.exports.decide = (arg) => {
  if(arg === 'Y'){
    complete()
  }else if (arg === 'N') {
    notComplete()
  }else{
    console.log("Please decide and type 'Y' for yes and 'N' for no")
  }
}

module.exports.complete = () => {

}

module.exports.notComplete = () => {

}

// const { argv: [,,...args] } = process


// prompt.start();


// prompt.get(['Your order total is ___. Ready to Purchase'], function (err, result) {
//   console.log(result)
//   module.exports(result)
// })

// prompt.get(['Choose a payment option'], function (err, result) {
// })
// prompt.get(['Your order is complete! Press any key to return to main menu'])
// decide(result)
//   console.log('command-line input received:')
//   // console.log(' First_Name: ' + result.First_Name)
//   // console.log(result)
//   console.log(args)
// })
