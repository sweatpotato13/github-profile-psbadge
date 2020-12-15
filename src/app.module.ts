import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AtcoderModule } from "./atcoder/atcoder.module";
import { CodeforcesModule } from "./codeforces/codeforces.module";

@Module({
    imports: [CodeforcesModule, AtcoderModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
