import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { LoggingInterceptor } from "@common/interceptors/logging.interceptor";
import { AtcoderModule } from "./modules/atcoder/atcoder.module";
import { BadRequestExceptionFilter } from "./common/filters/bad-request-exception.filter";
import { CodeforcesModule } from "./modules/codeforces/codeforces.module";
import { TopcoderModule } from "./modules/topcoder/topcoder.module";

@Module({
    imports: [
        /** ------------------ */
        AtcoderModule,
        CodeforcesModule,
        TopcoderModule
    ],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor
        },
        {
            provide: APP_FILTER,
            useClass: BadRequestExceptionFilter
        }
    ]
})
export class AppModule {}
