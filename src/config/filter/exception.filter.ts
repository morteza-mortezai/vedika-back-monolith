
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { TypeORMError } from 'typeorm';
import { PostgresError } from 'postgres'
import { IResponseError } from '../interfaces/error-response.interface';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let message = (exception as any)?.message;
    let code: string = (exception as any)?.response?.error || 'Exception';
    let status: number = (exception as any)?.response?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;

    const ec = exception
    if (ec instanceof HttpException) {
      status = (exception as HttpException).getStatus();
      message = (exception as any).getResponse()?.message ? (exception as any)?.getResponse().message : (exception as any).getResponse()
      code = (exception as HttpException).message
    }
    else if (ec instanceof TypeORMError) {
      status = HttpStatus.UNPROCESSABLE_ENTITY
      message = (exception as TypeORMError).message;
      code = (exception as TypeORMError).name;
    }
    else if (ec instanceof PostgresError) {
      status = HttpStatus.UNPROCESSABLE_ENTITY
      message = (exception as PostgresError).message;
      code = (exception as PostgresError).code as string;
    }
    response.status(status).json(globalResponseError(status, message, code, request));
  }
}



export const globalResponseError: (statusCode: number, message: string, code: string, request: Request) => IResponseError = (
  statusCode: number,
  message: string,
  code: string,
  request: Request
): IResponseError => {
  return {
    statusCode: statusCode,
    message,
    code,
    timestamp: new Date().toISOString(),
    path: request.url,
    method: request.method
  };
};


