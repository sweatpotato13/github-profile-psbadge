import { Controller, Get, Header, Param } from "@nestjs/common";

import { CodeforcesService } from "./codeforces.service";

@Controller("cf")
export class CodeforcesController {
    constructor(private codeforcesService: CodeforcesService) {}

    @Get(":handle")
    @Header("content-type", "image/svg+xml")
    async getApi(@Param() params) {
        return this.codeforcesService.getCodeforcesSvg(params.handle);
    }
}
