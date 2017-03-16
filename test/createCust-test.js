'use strict';

const { assert: {isFunction} } = require('chai');
const createCust = require('../lib/createCust');

describe('createCust', () => {
  it('should be a function', () => {
    isFunction(createCust)
  });
});
