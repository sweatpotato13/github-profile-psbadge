import { Controller, Get, Header, Param } from "@nestjs/common";
import { CodeforcesService } from "@src/domains/codeforces/application/services/codeforces.service";

@Controller("cf")
export class CodeforcesController {
    constructor(private codeforcesService: CodeforcesService) {}

    @Get(":handle")
    @Header("content-type", "image/svg+xml")
    async getApi(@Param("handle") handle): Promise<string> {
        return this.codeforcesService.getCodeforcesSvg(handle);
    }
}
