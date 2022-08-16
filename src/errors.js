/*
 * decaffeinate suggestions:
 * DS002: Fix invalid constructor
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
class ConsumerError extends Error {
  constructor(message) {
    this.message = message;
    super(...arguments);
  }
}
class ExtensionError extends Error {
  constructor(message) {
    this.message = message;
    super(...arguments);
  }
}
class StoreError extends Error {
  constructor(message) {
    this.message = message;
    super(...arguments);
  }
}
class ParameterError extends Error {
  constructor(message) {
    this.message = message;
    super(...arguments);
  }
}
class SignatureError extends Error {
  constructor(message) {
    this.message = message;
    super(...arguments);
  }
}
class NonceError extends Error {
  constructor(message) {
    this.message = message;
    super(...arguments);
  }
}
class OutcomeResponseError extends Error {
  constructor(message) {
    this.message = message;
    super(...arguments);
  }
}

module.exports = {
  ConsumerError,
  ExtensionError,
  StoreError,
  ParameterError,
  SignatureError,
  NonceError,
  OutcomeResponseError
};
