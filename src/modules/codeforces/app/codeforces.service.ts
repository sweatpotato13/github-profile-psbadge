import { Injectable } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { config } from "@src/config";
import { ICodeforcesService } from "../domain/interfaces/codeforces.interface";
import { GetCodeforcesBadgeQuery } from "../domain/queries/impl/get-codeforces-badge.query";
import fetch from "node-fetch";

@Injectable()
export class CodeforcesService implements ICodeforcesService {
    constructor(private readonly _queryBus: QueryBus) {}

    public async getBadge(handle: string): Promise<any> {
        try {
            const data = await this.getCodeforcesInfo(handle);
            const ret = await this._queryBus.execute(
                new GetCodeforcesBadgeQuery(data)
            );
            return ret;
        } catch (error) {
            throw error.message;
        }
    }

    async getCodeforcesInfo(handle: string): Promise<any> {
        return fetch(`${config.codeforcesEndPoint}${handle}`).then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    }
}
