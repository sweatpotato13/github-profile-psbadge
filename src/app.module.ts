import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AtcoderModule } from "./atcoder/atcoder.module";
import { CodeforcesModule } from "./codeforces/codeforces.module";
import { TopcoderModule } from "./topcoder/topcoder.module";
import { LoggerModule } from "./logger/logger.module";
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";

@Module({
    imports: [LoggerModule, CodeforcesModule, AtcoderModule, TopcoderModule],
    controllers: [AppController],
    providers: [AppService, {
        provide: APP_FILTER,
        useClass: HttpExceptionFilter,
    }
    ],
})
export class AppModule { }
