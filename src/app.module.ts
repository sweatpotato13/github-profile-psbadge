import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";

import { HttpExceptionFilter } from "./common/filters/http-exception.filter";
import { LoggingInterceptor } from "./common/interceptors/logging.interceptor";
import { AtcoderModule } from "./domains/atcoder/atcoder.module";
import { CodeforcesModule } from "./domains/codeforces/codeforces.module";
import { TopcoderModule } from "./domains/topcoder/topcoder.module";
import { LoggerModule } from "./logger/logger.module";

@Module({
    imports: [LoggerModule, CodeforcesModule, AtcoderModule, TopcoderModule],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor,
        },
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        },
    ],
})
export class AppModule {}
