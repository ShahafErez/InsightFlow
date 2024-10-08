class CustomErrors extends Error {
  constructor(statusCode, message) {
    super(message);
    this.status = statusCode;
  }
}

class BadUserInput extends CustomErrors {
  constructor(message) {
    super(400, message);
  }
}

class Forbidden extends CustomErrors {
  constructor(message) {
    super(403, message);
  }
}

class Unauthorized extends CustomErrors {
  constructor(message) {
    super(401, message);
  }
}

class NotFound extends CustomErrors {
  constructor(message) {
    super(404, message);
  }
}

class ResourceAlreadyExists extends CustomErrors {
  constructor(message) {
    super(409, message);
  }
}

module.exports = {
  CustomErrors,
  ResourceAlreadyExists,
  NotFound,
  BadUserInput,
  Forbidden,
  Unauthorized,
};
