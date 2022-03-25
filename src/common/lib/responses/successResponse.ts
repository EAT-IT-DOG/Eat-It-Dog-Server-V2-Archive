import { BaseResponse } from './baseResponse';

export class SuccessResponse<T> extends BaseResponse<T> {
  constructor(message: string, data?: T) {
    super(200, message, data);
  }
}
