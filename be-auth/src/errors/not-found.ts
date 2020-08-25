import { RequestError } from './request';

const DEFAULT_REASON:string = 'Route not found.';

export class NotFoundError extends RequestError {
  constructor() {
    super(404, DEFAULT_REASON);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  public serializeErrors() {
    return [
      { message: DEFAULT_REASON }
    ];
  }
}