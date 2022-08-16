/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
const MemoryNonceStore  = require('../lib/memory-nonce-store');
const should            = require('should');
const shared            = require('./shared');


describe('MemoryNonceStore', () => shared.shouldBehaveLikeNonce(() => {
  return new MemoryNonceStore();
}));

