import { Module } from "@nestjs/common";

import { TopcoderController } from "./application/controllers/topcoder.controller";
import { TopcoderService } from "./application/services/topcoder.service";
import { TopcoderAggregate } from "./domainModel/aggregate/topcoder.aggregate";

@Module({
    controllers: [TopcoderController],
    providers: [TopcoderService, TopcoderAggregate],
})
export class TopcoderModule {}
