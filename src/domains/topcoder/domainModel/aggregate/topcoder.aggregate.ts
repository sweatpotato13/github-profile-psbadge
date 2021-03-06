import { Injectable } from "@nestjs/common";
import {
    Card,
    ITopcoderUserInfo,
} from "@src/domains/topcoder/domainModel/interface/topcoder.interface";
import * as fetch from "node-fetch";

@Injectable()
export class TopcoderAggregate {
    async getTopcoderInfo(handle: string): Promise<ITopcoderUserInfo> {
        // Use Topcoder official API
        const response = await fetch(
            "http://api.topcoder.com/v2/users/" + handle
        );
        const obj = await response.json();
        return obj;
    }

    async getTopcoderSvg(handle: string): Promise<string> {
        const obj = await this.getTopcoderInfo(handle);
        console.log(obj);
        const card = new Card({ user: obj });
        return card.render();
    }
}
