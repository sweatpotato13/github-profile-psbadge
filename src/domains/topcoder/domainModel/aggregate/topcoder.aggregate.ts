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
        return fetch("http://api.topcoder.com/v2/users/" + handle)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json();
        })
 
    }

    async getTopcoderSvg(handle: string): Promise<string> {
        const obj = await this.getTopcoderInfo(handle);
        const card = new Card({ user: obj });
        return card.render();
    }
}
