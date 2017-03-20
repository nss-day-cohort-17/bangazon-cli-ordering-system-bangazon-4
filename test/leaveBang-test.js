'use strict';

const { assert: {isFunction} } = require('chai')
const   exit = require('../lib/leaveBang')

describe('exit',() => {
  it('should be a function', () => {
    console.log("exit", exit);
    isFunction(exit)
  })
})
