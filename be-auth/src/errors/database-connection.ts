import { RequestError } from "./request";

const DEFAULT_REASON:string = 'Failed to connect to the database';

export class DatabaseConnectionError extends RequestError { 
  public readonly reason: string;
  constructor() {
    super(500, DEFAULT_REASON);
    this.reason = DEFAULT_REASON;
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  public serializeErrors() {
    return [
      { message: this.reason }
    ];
  }
}