'use strict';

const { assert: {isFunction} } = require('chai')
const   { complete, notComplete} = require('../lib/completeOrder')

describe('completeOrder', ()=> {
  describe('complete',() => {
    it('should be a function',() => {
      isFunction(complete)
    })
  })
  describe('notComplete', () => {
    it('should be a function', () => {
      isFunction(notComplete)
    })
  })
})
