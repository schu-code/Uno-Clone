const ExtendableError = require("./ExtendableError");

class ApiClientError extends ExtendableError {
  constructor(message) {
    super(message);
  }
}

module.exports = ApiClientError;