'use strict';

const { assert: {isFunction, isObject, isArray} } = require('chai')
const { directCreateCust, directActiveCust, directPaymentOpt, directAddProduct, directCompleteOrder, directProductPop, exit } = require('../lib/mainMenu')

describe('mainMenu', () => {
  describe('directCreateCust', () => {
    it('should be a function', () => {
      isFunction(directCreateCust)
    })
    it('should return an object', () => {
      isFunction(directCreateCust())
    })
  })
  describe('activeCust', () => {
    it('should be a function', () => {
      isFunction(directActiveCust)
    })
    it('should return an array',() => {
      isArray(directActiveCust())
    })
  })
  describe('directPaymentOpt', () => {
    it('should be a function', () => {
      isFunction(directPaymentOpt)
    })
  })
  describe('directAddProduct', () => {
    it('should be a function', () => {
      isFunction(directAddProduct)
    })
    it('should return an array', () => {
      isArray(directAddProduct())
    })
  })
  describe('completeOrder', () => {
    it('should be a function', () => {
       isFunction(directCompleteOrder)
    })
  })
  describe('productPop', () => {
    it('should return an array', () => {
      isArray(directProductPop())
    })
  })
  describe('exit',() => {
      it('should be a function', () => {
          isFunction(exit)
      })
  })
})
