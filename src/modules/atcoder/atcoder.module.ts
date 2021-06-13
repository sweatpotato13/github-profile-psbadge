import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { LoggerService } from "@src/shared/services";
import { AtcoderController } from "./app/atcoder.controller";
import { AtcoderService } from "./app/atcoder.service";
import { QueryHandlers } from "./domain/queries/handlers";

@Module({
    imports: [CqrsModule],
    providers: [
        { provide: "AtcoderService", useClass: AtcoderService },
        LoggerService,
        ...QueryHandlers
    ],
    controllers: [AtcoderController]
})
export class AtcoderModule {}
