'use strict';

const { assert: {isFunction, isObject} } = require('chai');
const { order } = require('../lib/addProduct');

describe('order', () => {
  it('should be a function', () => {
    isFunction(order)
  });
  it('should be an object', () => {
    isObject(order())
  })
});
