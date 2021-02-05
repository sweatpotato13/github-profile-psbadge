import { Controller, Get, Header, Param } from "@nestjs/common";
import { TopcoderService } from "@src/domains/topcoder/application/services/topcoder.service";

@Controller("tc")
export class TopcoderController {
    constructor(private topcoderService: TopcoderService) {}

    @Get(":handle")
    @Header("content-type", "image/svg+xml")
    async getApi(@Param("handle") handle): Promise<string> {
        return this.topcoderService.getTopcoderSvg(handle);
    }
}
