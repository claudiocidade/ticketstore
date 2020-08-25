export abstract class RequestError extends Error {
  constructor(public readonly statusCode: number, message?: string) {
    super(message);
    Object.setPrototypeOf(this, RequestError.prototype);
  }

  abstract serializeErrors(): { message: string, field?: string }[];
}