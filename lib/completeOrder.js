// if user enters 'Y', return payment options
//if user enters 'N', return to main menu
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
