'use strict';
const {createCust} = require('../lib/createCust'),
      productPop = require('../lib/productPop'),
      {newPaymentOpt} = require('../lib/paymentOpt'),
      leaveBang = require('../lib/leaveBang'),
      {getCustomer} = require('../lib/activeCust'),
      addProduct = require('../lib/addProduct'),
      {decide} = require('../lib/completeOrder');

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
  return createCust()
}
module.exports.directActiveCust = () => {
  return getCustomer();
}
module.exports.directPaymentOpt =() => {
  return newPaymentOpt();
}
module.exports.directAddProduct = ()=> {
  return addProduct();
}
module.exports.directCompleteOrder = () => {
 return decide();
}
module.exports.directProductPop = () => {
  return productPop();
}
module.exports.exit = ()=>{
  return leaveBang()
};
