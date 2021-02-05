import { Module } from "@nestjs/common";

import { AtcoderController } from "./application/controllers/atcoder.controller";
import { AtcoderService } from "./application/services/atcoder.service";
import { AtcoderAggregate } from "./domainModel/aggregate/atcoder.aggregate";

@Module({
    controllers: [AtcoderController],
    providers: [AtcoderService, AtcoderAggregate],
})
export class AtcoderModule {}
