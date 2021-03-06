import { Injectable } from "@nestjs/common";
import {
    Card,
    IAtcoderUserInfo,
} from "@src/domains/atcoder/domainModel/interface/atcoder.interface";
import * as fetch from "node-fetch";

@Injectable()
export class AtcoderAggregate {
    async getAtCoderInfo(handle: string): Promise<IAtcoderUserInfo> {
        const response = await fetch("http://localhost:5000/v1.0/ac/" + handle);
        const obj = await response.json();
        return obj;
    }

    async getAtcoderSvg(handle: string): Promise<string> {
        const obj = await this.getAtCoderInfo(handle);
        const card = new Card({ user: obj.userinfo[0] });
        return card.render();
    }
}
