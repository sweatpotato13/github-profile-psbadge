import { Injectable } from "@nestjs/common";
import { Card, ICodeforceUserInfo } from "@src/domains/codeforces/domainModel/interface/codeforces.interface";
import * as fetch from "node-fetch";

@Injectable()
export class CodeforcesAggregate {
    getCodeforcesColor(rank: string): string {
        if (rank === "legendary grandmaster") return "#ff0000";
        if (rank === "international grandmaster") return "#ff0000";
        if (rank === "grandmaster") return "#ff0000";
        if (rank === "international master") return "#ff8c00";
        if (rank === "master") return "#ff8c00";
        if (rank === "candidate master") return "#aa00aa";
        if (rank === "expert") return "#0000ff";
        if (rank === "specialist") return "#03a89e";
        if (rank === "pupil") return "#008000";
        if (rank === "newbie") return "#808080";
    }

    async getCodeforcesInfo(handle: string): Promise<ICodeforceUserInfo> {
        // Use Codeforce official API
        const response = await fetch(
            "http://codeforces.com/api/user.info?handles=" + handle
        );
        const obj = await response.json();
        console.log(obj);
        return obj;
    }

    async getCodeforcesSvg(handle: string): Promise<string> {
        const obj = await this.getCodeforcesInfo(handle);
        const handleTextLength = handle.length * 65;
        const rank = obj.result[0].rank;
        const rating = obj.result[0].rating;
        const color = await this.getCodeforcesColor(rank);
        const card = new Card({ user:obj.result[0] });
        return card.render();
    }
}
