'use strict';

const { assert: {isFunction} } = require('chai');
const paymentOpt = require('../lib/paymentOpt');

describe('paymentOpt', () => {
  it('should be a function', () => {
    isFunction(paymentOpt)
  });
});
