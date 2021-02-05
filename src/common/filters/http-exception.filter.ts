import {
    ExceptionFilter,
    Catch,
    HttpException,
    ArgumentsHost
} from "@nestjs/common";
import { Request, Response } from "express";
import { LoggerService } from "@src/logger/logger.service";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    constructor(private readonly logger: LoggerService) {}

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        this.logger.error(exception.message, {
            code: exception.getStatus(),
            context: "Exception"
        });

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            message: exception.message,
            path: request.url
        });
    }
}
