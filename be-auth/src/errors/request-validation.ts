import { ValidationError } from 'express-validator';
import { RequestError } from './request';

export class RequestValidationError extends RequestError { 
  constructor(public errors: ValidationError[]) {
    super(400, 'Invalid request parameters.');
  }

  public serializeErrors() {
    return this.errors.map(error => {
      return { message: error.msg, field: error.param }
    });
  }
}