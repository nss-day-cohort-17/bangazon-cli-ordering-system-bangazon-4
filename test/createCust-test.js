'use strict';

const { isFunction, isObject } = require('chai').assert;
const {createCust} = require('../lib/createCust');

describe('createCust', () => {
  it('that should be a function', () => {
    isFunction(createCust)
  });
  it('that sends an object', () => {
    isObject(createCust())
  })
  it('from a promise', ()=> {
    return createCust()
    .then((data)=>{
      let cust1 = data
      console.log(cust1)
      isObject(cust1)
    })
  })
});
