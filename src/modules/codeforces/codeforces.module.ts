import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { LoggerService } from "@src/shared/services";
import { CodeforcesController } from "./app/codeforces.controller";
import { CodeforcesService } from "./app/codeforces.service";
import { QueryHandlers } from "./domain/queries/handlers";

@Module({
    imports: [CqrsModule],
    providers: [
        { provide: "CodeforcesService", useClass: CodeforcesService },
        LoggerService,
        ...QueryHandlers
    ],
    controllers: [CodeforcesController]
})
export class CodeforcesModule {}
