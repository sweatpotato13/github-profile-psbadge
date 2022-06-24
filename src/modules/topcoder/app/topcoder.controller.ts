import { Controller, Get, Header, Inject, Param } from "@nestjs/common";
import { ErrorResponse, SuccessResponse } from "@src/shared/models/responses";
import { ErrorCodes } from "@src/shared/constants";
import { ITopcoderService } from "../domain/interfaces/topcoder.interface";

@Controller("tc")
export class TopcoderController {
    constructor(
        @Inject("TopcoderService")
        private readonly _service: ITopcoderService
    ) {}

    @Get(":handle")
    @Header("content-type", "image/svg+xml")
    async getBadge(@Param("handle") handle: string): Promise<any> {
        try {
            const result = await this._service.getBadge(handle);
            new SuccessResponse(
                "Succeeded in creating an Topcoder Badge.",{
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
