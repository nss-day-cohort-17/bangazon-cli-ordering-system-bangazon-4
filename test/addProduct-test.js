'use strict';

const { assert: {isFunction, isObject} } = require('chai');
const addProduct = require('../lib/addProduct');

describe('addProduct', () => {
  it('should be a function', () => {
    isFunction(addProduct)
  });
  it('should be an object', () => {
    isObject(addProduct())
  })
});
