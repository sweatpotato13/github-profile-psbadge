import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { LoggerService } from "@src/shared/services";
import { TopcoderController } from "./app/topcoder.controller";
import { TopcoderService } from "./app/topcoder.service";
import { QueryHandlers } from "./domain/queries/handlers";

@Module({
    imports: [CqrsModule],
    providers: [
        { provide: "TopcoderService", useClass: TopcoderService },
        LoggerService,
        ...QueryHandlers
    ],
    controllers: [TopcoderController]
})
export class TopcoderModule {}
