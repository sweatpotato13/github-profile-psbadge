import { Injectable } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { config } from "@src/config";
import { GetAtcoderBadgeDto } from "../domain/dtos/get-atcoder-badge.dto";
import { IAtcoderService } from "../domain/interfaces/atcoder.interface";
import { GetAtcoderBadgeQuery } from "../domain/queries/impl/get-atcoder-badge.query";
import fetch from "node-fetch";

@Injectable()
export class AtcoderService implements IAtcoderService {
    constructor(private readonly _queryBus: QueryBus) {}

    public async getBadge(handle: string): Promise<any> {
        try {
            const data = await this.getAtCoderInfo(handle);
            const ret = await this._queryBus.execute(
                new GetAtcoderBadgeQuery(data)
            );
            return ret;
        } catch (error) {
            throw error.message;
        }
    }

    async getAtCoderInfo(handle: string): Promise<GetAtcoderBadgeDto> {
        return fetch(`${config.atcoderEndPoint}${handle}`).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    }
}
