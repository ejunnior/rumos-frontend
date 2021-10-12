export interface Envelope<T> {
    errorMessage: object;
    result: T;
    timeGenerated: Date;
  }