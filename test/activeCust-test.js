'use strict';

const { assert: {isFunction, isObject, isArray} } = require('chai');

const {getCustomer, getBuyer } = require('../lib/activeCust');

describe('activeCust', () => {
  it('should be a function', () => {
    isFunction(getCustomer)
  });

  it('should return an array', () => {
    isArray(getCustomer())
  })
    describe('getBuyer', () => {
    it('should return a function', () => {
      isFunction(getBuyer)
    })
    it('and this should return and object', () => {
      isObject(getBuyer())
    })
  })
});
