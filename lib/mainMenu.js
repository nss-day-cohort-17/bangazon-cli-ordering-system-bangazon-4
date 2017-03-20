'use strict';
const createCust = require('../lib/createCust');

module.exports.direct = (option) => {
  if(option === 1){
    directCreateCust();
  }else if (option === 2) {
    directActiveCust();
  }else if (option === 3) {
    directPaymentOpt()
  }else if (option === 4) {
    directAddProduct()
  }else if (option === 5) {
    directCompleteOrder()
  }else if (option === 6) {
  directProductPop()
  }else if (option === 7) {
    exit()
  }else {
    console.log("That is not an option")
  }
}

module.exports.directCreateCust = () => {
  return createCust
}
module.exports.directActiveCust = () => {
  return [];
}
module.exports.directPaymentOpt =() => {

}
module.exports.directAddProduct = ()=> {
  return [];
}
module.exports.directCompleteOrder = () => {

}
module.exports.directProductPop = () => {
  return [];
}
module.exports.exit = ()=>{

};
