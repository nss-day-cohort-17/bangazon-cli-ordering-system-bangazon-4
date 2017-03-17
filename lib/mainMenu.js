'use strict';
const createCust = require('../lib/createCust');

console.log(createCust)
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
