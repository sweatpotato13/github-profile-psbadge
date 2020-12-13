import { Injectable } from '@nestjs/common';
import * as fetch from "node-fetch";

@Injectable()
export class ApiService {
    async getCodeforcesInfo(handle) {
        // Use Codeforce official API
        const response = await fetch(
            "http://codeforces.com/api/user.info?handles=" + handle
        );
        const obj = await response.json();
        return obj;
    }
    
    async getAtCoderInfo(handle): Promise<string> {
        // https://github.com/miozune/AtCoderUsersAPI
        const response = await fetch(
            "https://us-central1-atcoderusersapi.cloudfunctions.net/api/info/username/" +
                handle
        );
        const obj = await response.json();
        return obj;
    }
    
    async getCodeforcesSvg(handle){
        const obj = await this.getCodeforcesInfo(handle);
        const rank = obj["result"][0]["rank"];
        const rating = obj["result"][0]["rating"];
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="140" height="20" role="img"
        aria-label="codeforces">
        <title>codeforces</title>
        <linearGradient id="s" x2="0" y2="100%">
            <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
            <stop offset="1" stop-opacity=".1" />
        </linearGradient>
        <clipPath id="r">
            <rect width="140" height="20" rx="3" fill="#fff" />
        </clipPath>
        <g clip-path="url(#r)">
            <rect width="69" height="20" fill="#555" />
            <rect x="69" width="71" height="20" fill="#4c1" />
            <rect width="140" height="20" fill="url(#s)" />
        </g>
        <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
            text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="355" y="150" fill="#010101"
                fill-opacity=".3" transform="scale(.1)" textLength="590">codeforces</text><text x="355" y="140"
                transform="scale(.1)" fill="#fff" textLength="590">codeforces</text><text aria-hidden="true" x="1035" y="150"
                fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="610">${handle}</text><text x="1035"
                y="140" transform="scale(.1)" fill="#fff" textLength="610">${handle}</text></g>
    </svg>`;
    }
}
