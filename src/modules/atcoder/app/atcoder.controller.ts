import { Controller, Get, Header, Inject, Param } from "@nestjs/common";
import { ErrorResponse, SuccessResponse } from "@src/shared/models/responses";
import { ErrorCodes } from "@src/shared/constants";
import { IAtcoderService } from "../domain/interfaces/atcoder.interface";

@Controller("ac")
export class AtcoderController {
    constructor(
        @Inject("AtcoderService") private readonly _service: IAtcoderService
    ) {}

    @Get(":handle")
    @Header("content-type", "image/svg+xml")
    async getBadge(@Param("handle") handle: string): Promise<any> {
        try {
            const result = await this._service.getBadge(handle);
            new SuccessResponse(
                "Succeeded in creating an Atcoder Badge.",{
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
