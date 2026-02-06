// utils/errors.js
// Minimal error utilities used by typical tests

class AppError extends Error {
  constructor(message, status = 500, details = null) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

class BadRequestError extends AppError {
  constructor(message = "Bad Request", details = null) {
    super(message, 400, details);
  }
}

class NotFoundError extends AppError {
  constructor(message = "Not Found", details = null) {
    super(message, 404, details);
  }
}

function toHttpError(err) {
  if (err instanceof AppError) return err;
  return new AppError(
    err.message || "Internal Server Error",
    err.status || 500
  );
}

module.exports = {
  AppError,
  BadRequestError,
  NotFoundError,
  toHttpError,
};
