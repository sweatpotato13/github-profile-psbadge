import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { LoggerService } from "@src/logger/logger.service";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor(private readonly _logger: LoggerService) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const now = Date.now();
        const req = context.switchToHttp().getRequest();

        if (req) {
            const method = req.method;
            const url = req.url;
            return next.handle().pipe(
                tap(() => {
                    this._logger.info(
                        `${method} ${url} ${Date.now() - now}ms`,
                        {
                            context: "Interceptor",
                        }
                    );
                })
            );
        }
    }
}
