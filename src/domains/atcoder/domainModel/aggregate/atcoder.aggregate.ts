import { Injectable } from "@nestjs/common";
import { IAtcoderUserInfo } from "@src/domains/atcoder/domainModel/interface/atcoder.interface";
import * as fetch from "node-fetch";

@Injectable()
export class AtcoderAggregate {
    async getAtCoderInfo(handle: string): Promise<IAtcoderUserInfo> {
        const response = await fetch("http://localhost:5000/v1.0/ac/" + handle);
        const obj = await response.json();
        return obj;
    }

    getAtCoderColor(rating: number): string {
        if (rating < 400) return "#808080";
        else if (rating < 800) return "#804000";
        else if (rating < 1200) return "#008000";
        else if (rating < 1600) return "#00C0C0";
        else if (rating < 2000) return "#0000FF";
        else if (rating < 2400) return "#C0C000";
        else if (rating < 2800) return "#FF8000";
        else return "#FF0000";
    }

    async getAtcoderSvg(handle: string): Promise<string> {
        const obj = await this.getAtCoderInfo(handle);
        const handleTextLength = handle.length * 65;
        const rating = obj.userinfo[0].rating;
        const color = this.getAtCoderColor(rating);
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
            <text aria-hidden="true" x="355" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="590">AtCoder</text>
                <text x="355" y="140" transform="scale(.1)" fill="#fff" textLength="590">AtCoder</text>
                <text aria-hidden="true" x="1660" y="150" fill="#010101" fill-opacity=".0" transform="scale(.1)" textLength="610">${handle}</text>
                <text x="1660" y="140" transform="scale(.1)" fill="#fff" textLength="${handleTextLength}">${handle}</text>
                <text aria-hidden="true" x="2800" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="310">${rating}</text>
                <text x="2800" y="140" transform="scale(.1)" fill="#fff" textLength="310">${rating}</text>
        </g>
    </svg>`;
    }
}
