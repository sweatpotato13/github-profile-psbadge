import { Module } from "@nestjs/common";

import { CodeforcesController } from "./application/controllers/codeforces.controller";
import { CodeforcesService } from "./application/services/codeforces.service";
import { CodeforcesAggregate } from "./domainModel/aggregate/codeforces.aggregate";

@Module({
    controllers: [CodeforcesController],
    providers: [CodeforcesService, CodeforcesAggregate],
})
export class CodeforcesModule {}
