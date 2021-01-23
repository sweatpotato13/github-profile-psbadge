import { Module } from "@nestjs/common";

import { TopcoderController } from "./topcoder.controller";
import { TopcoderService } from "./topcoder.service";

@Module({
    controllers: [TopcoderController],
    providers: [TopcoderService],
})
export class TopcoderModule {}
