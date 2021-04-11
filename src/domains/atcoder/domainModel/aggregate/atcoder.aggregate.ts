import { BadRequestException, Injectable } from "@nestjs/common";
import { config } from "@src/config";
import {
    Card,
    IAtcoderUserInfo,
} from "@src/domains/atcoder/domainModel/interface/atcoder.interface";
import * as fetch from "node-fetch";

@Injectable()
export class AtcoderAggregate {
    async getAtCoderInfo(handle: string): Promise<IAtcoderUserInfo> {
       return fetch(`${config.atCoderApiEndpoint}${handle}`)
       .then(response => {
         if (!response.ok) {
           throw new Error(response.statusText)
         }
         return response.json();
       })
    }

    async getAtcoderSvg(handle: string): Promise<string> {
        const obj = await this.getAtCoderInfo(handle);
        console.log(obj);
        const card = new Card({ user: obj });
        return card.render();
    }
}
