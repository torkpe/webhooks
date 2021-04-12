export function errorHandler(err, res) {
  let status = err.httpStatusCode
    ? err.httpStatusCode
    : err.status
    ? err.status
    : 500;
  if (err) {
    let message;
    if (err.errors && err.errors[0] && err.errors[0].messages[0]) {
      message = err.errors[0].messages[0];
    } else if (err.message) {
      message = err.message;
    } else if (typeof err === 'string') {
      message = err;
    } else {
      message = 'Something went wrong';
    }

    const error = err.error
      ? typeof err.error === 'string'
        ? err.error
        : err.error.error
        ? err.error.error
        : 'VALIDATION_ERROR'
      : 'VALIDATION_ERROR';

    res.status(status).json({
      message,
      error,
      status
    });
  }
}
