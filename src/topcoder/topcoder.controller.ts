import { Controller, Get, Header, Param } from "@nestjs/common";

import { TopcoderService } from "./topcoder.service";

@Controller("topcoder")
export class TopcoderController {
    constructor(private topcoderService: TopcoderService) {}

    @Get(":handle")
    @Header("content-type", "image/svg+xml")
    async getApi(@Param() params) {
        return this.topcoderService.getTopcoderSvg(params.handle);
    }
}
