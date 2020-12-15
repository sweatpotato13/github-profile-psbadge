import { Controller, Get, Header, Param } from "@nestjs/common";

import { AtcoderService } from "./atcoder.service";

@Controller("ac")
export class AtcoderController {
    constructor(private atcoderService: AtcoderService) {}

    @Get(":handle")
    @Header("content-type", "image/svg+xml")
    async getApi(@Param() params) {
        return this.atcoderService.getAtcoderSvg(params.handle);
    }
}
