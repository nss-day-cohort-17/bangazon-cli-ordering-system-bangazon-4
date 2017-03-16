'use strict';

const { assert: {isFunction, isObject} } = require('chai');
const activeCust = require('../lib/activeCust');

describe('activeCust', () => {
  it('should be a function', () => {
    isFunction(activeCust)
  });

  it('should return an object', () => {
    isObject({})
  })
});
