import { Injectable } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { config } from "@src/config";
import { ITopcoderService } from "../domain/interfaces/topcoder.interface";
import { GetTopcoderBadgeQuery } from "../domain/queries/impl/get-topcoder-badge.query";
import fetch from "node-fetch";

@Injectable()
export class TopcoderService implements ITopcoderService {
    constructor(private readonly _queryBus: QueryBus) {}

    public async getBadge(handle: string): Promise<any> {
        try {
            const data = await this.getTopcoderInfo(handle);
            const ret = await this._queryBus.execute(
                new GetTopcoderBadgeQuery(data)
            );
            return ret;
        } catch (error) {
            throw error.message;
        }
    }

    async getTopcoderInfo(handle: string): Promise<any> {
        return fetch(`${config.topcoderEndPoint}${handle}`).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    }
}
