import status from 'http-status-codes'

export class AuthenticationError extends Error{
  constructor(message){
    super(message);
    this.status = status.UNAUTHORIZED;
  }
}

export class EntryExistError extends Error{
  constructor(message){
    super(message);
    this.status = status.CONFLICT;
  }
}

export class AuthorizationError extends Error{
  constructor(message){
    super(message);
    this.status = status.FORBIDDEN;
  }
}

export class EntryNotFound extends Error{
  constructor(message){
    super(message);
    this.status = status.NOT_FOUND;
  }
}

export class BadRequestError extends Error{
  constructor(message){
    super(message);
    this.status = status.BAD_REQUEST;
  }
}
