import { Controller, Get, Header, Inject, Param } from "@nestjs/common";
import { ErrorResponse, SuccessResponse } from "@src/shared/models/responses";
import { ErrorCodes } from "@src/shared/constants";
import { ICodeforcesService } from "../domain/interfaces/codeforces.interface";

@Controller("cf")
export class CodeforcesController {
    constructor(
        @Inject("CodeforcesService")
        private readonly _service: ICodeforcesService
    ) {}

    @Get(":handle")
    @Header("content-type", "image/svg+xml")
    async getBadge(@Param("handle") handle: string): Promise<any> {
        try {
            const result = await this._service.getBadge(handle);
            new SuccessResponse(
                "Succeeded in creating an CodeForces Badge.",{
                    handle: handle
                }
            );
            return result;
        } catch (error: any) {
            return new ErrorResponse(
                "There was an error get badge",
                ErrorCodes.BAD_REQUESTS,
                error
            );
        }
    }
}
