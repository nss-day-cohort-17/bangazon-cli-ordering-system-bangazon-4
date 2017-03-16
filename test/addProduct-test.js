'use strict';

const { assert: {isFunction} } = require('chai');
const addProduct = require('../lib/addProduct');

describe('addProduct', () => {
  it('should be a function', () => {
    isFunction(addProduct)
  });
});
