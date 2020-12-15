import { Injectable } from "@nestjs/common";
import * as fetch from "node-fetch";

@Injectable()
export class CodeforcesService {
    async getCodeforcesColor(rank) {
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

    async getCodeforcesInfo(handle) {
        // Use Codeforce official API
        const response = await fetch(
            "http://codeforces.com/api/user.info?handles=" + handle
        );
        const obj = await response.json();
        return obj;
    }

    async getCodeforcesSvg(handle) {
        const obj = await this.getCodeforcesInfo(handle);
        const handleTextLength = handle.length * 65;
        const rank = obj["result"][0]["rank"];
        const rating = obj["result"][0]["rating"];
        const color = await this.getCodeforcesColor(rank);
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="301" height="20" role="img"
        aria-label="codeforces">
        <title>codeforces</title>
        <linearGradient id="s" x2="0" y2="100%">
            <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
            <stop offset="1" stop-opacity=".1" />
        </linearGradient>
        <clipPath id="r">
            <rect width="301" height="20" rx="3" fill="#fff" />
        </clipPath>
        <g clip-path="url(#r)">
            <rect width="69" height="20" fill="#555" />
            <rect x="69" width="191" height="20" fill="${color}" />
            <rect x="260" width="41" height="20" fill="#555" />
            <rect width="301" height="20" fill="url(#s)" />
        </g>
        <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
            text-rendering="geometricPrecision" font-size="110">
            <text aria-hidden="true" x="355" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="590">codeforces</text>
                <text x="355" y="140" transform="scale(.1)" fill="#fff" textLength="590">codeforces</text>
                <text aria-hidden="true" x="1660" y="150" fill="#010101" fill-opacity=".0" transform="scale(.1)" textLength="610">${handle}</text>
                <text x="1660" y="140" transform="scale(.1)" fill="#fff" textLength="${handleTextLength}">${handle}</text>
                <text aria-hidden="true" x="2800" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="310">${rating}</text>
                <text x="2800" y="140" transform="scale(.1)" fill="#fff" textLength="310">${rating}</text>
        </g>
    </svg>`;
    }
}
