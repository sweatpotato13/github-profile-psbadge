import { Injectable } from "@nestjs/common";
import rTracer from "cls-rtracer";
import { createLogger, Logger } from "winston";

@Injectable()
export class LoggerService {
    private readonly logger: Logger;
    constructor() {
        this.logger = createLogger();
    }

    info(message: string, meta?: Record<string, any>) {
        const requestId = rTracer.id();
        if (requestId) meta.requestId = requestId;
        this.logger.info({ message, meta });
    }

    error(message: string, meta?: Record<string, any>) {
        const requestId = rTracer.id();
        if (requestId) meta.requestId = requestId;
        this.logger.error({ message, meta });
    }

    log(level: string, message: string, meta?: Record<string, any>) {
        const requestId = rTracer.id();
        if (requestId) meta.requestId = requestId;
        this.logger.log(level, message, { meta });
    }

    warn(message: string, meta?: Record<string, any>) {
        const requestId = rTracer.id();
        if (requestId) meta.requestId = requestId;
        this.logger.warn({ message, meta });
    }

    errorStream = {
        write: (message: string): void => {
            this.error(message);
        },
    };
}
