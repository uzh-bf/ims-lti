const extensions = require('./extensions');

// Export the main object
const exports = (module.exports = {

  // Version of the library this is
  version: '0.0.0',

  // Provider and Consumer classes
  Provider:        require('./provider'),
  Consumer:        require('./consumer'),
  OutcomeService:  extensions.Outcomes.OutcomeService,
  Errors:          require('./errors'),

  Stores: {
    RedisStore:   require('./redis-nonce-store'),
    MemoryStore:  require('./memory-nonce-store'),
    NonceStore:   require('./nonce-store')
  },

  Extensions: extensions,

  // Which version of the LTI standard are accepted
  supported_versions: [
    'LTI-1p0'
  ]
});
