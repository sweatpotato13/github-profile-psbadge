import { Module } from "@nestjs/common";

import { AtcoderController } from "./atcoder.controller";
import { AtcoderService } from "./atcoder.service";

@Module({
    controllers: [AtcoderController],
    providers: [AtcoderService],
})
export class AtcoderModule {}
