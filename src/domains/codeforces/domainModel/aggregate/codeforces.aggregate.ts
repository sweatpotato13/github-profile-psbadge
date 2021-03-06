import { Injectable } from "@nestjs/common";
import {
    Card,
    ICodeforceUserInfo,
} from "@src/domains/codeforces/domainModel/interface/codeforces.interface";
import * as fetch from "node-fetch";

@Injectable()
export class CodeforcesAggregate {
    async getCodeforcesInfo(handle: string): Promise<ICodeforceUserInfo> {
        // Use Codeforce official API
        const response = await fetch(
            "http://codeforces.com/api/user.info?handles=" + handle
        );
        const obj = await response.json();
        return obj;
    }

    async getCodeforcesSvg(handle: string): Promise<string> {
        const obj = await this.getCodeforcesInfo(handle);
        const card = new Card({ user: obj.result[0] });
        return card.render();
    }
}
