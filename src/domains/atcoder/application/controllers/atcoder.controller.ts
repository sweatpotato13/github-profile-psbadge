import { Controller, Get, Header, Param } from "@nestjs/common";
import { AtcoderService } from "@src/domains/atcoder/application/services/atcoder.service";

@Controller("ac")
export class AtcoderController {
    constructor(private atcoderService: AtcoderService) {}

    @Get(":handle")
    @Header("content-type", "image/svg+xml")
    async getApi(@Param("handle") handle: string): Promise<string> {
        return this.atcoderService.getAtcoderSvg(handle);
    }
}
