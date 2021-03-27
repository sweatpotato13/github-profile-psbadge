import { BadRequestException, Injectable } from "@nestjs/common";
import {
    Card,
    ICodeforceUserInfo,
} from "@src/domains/codeforces/domainModel/interface/codeforces.interface";
import * as fetch from "node-fetch";

@Injectable()
export class CodeforcesAggregate {
    async getCodeforcesInfo(handle: string): Promise<ICodeforceUserInfo> {
        // Use Codeforce official API
       return fetch("http://codeforces.com/api/user.info?handles=" + handle)
       .then(response => {
         if (!response.ok) {
           throw new Error(response.statusText)
         }
         return response.json();
       })
    }

    async getCodeforcesSvg(handle: string): Promise<string> {
        const obj = await this.getCodeforcesInfo(handle);
        const card = new Card({ user: obj.result[0] });
        return card.render();
    }
}
