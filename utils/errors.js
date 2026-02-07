class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
class BadRequestError extends AppError {
  constructor(message = "Invalid data") {
    super(message, 400);
  }
}
class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(message, 404);
  }
}
module.exports = { AppError, BadRequestError, NotFoundError };
