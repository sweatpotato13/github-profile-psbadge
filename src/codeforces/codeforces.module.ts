import { Module } from "@nestjs/common";

import { CodeforcesController } from "./codeforces.controller";
import { CodeforcesService } from "./codeforces.service";

@Module({
    controllers: [CodeforcesController],
    providers: [CodeforcesService],
})
export class CodeforcesModule {}
