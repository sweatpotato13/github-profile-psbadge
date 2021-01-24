import { Injectable } from "@nestjs/common";
import * as fetch from "node-fetch";

@Injectable()
export class TopcoderService {
    async getTopcoderColor(rating) {
        if (rating < 900) return "#999999";
        else if (rating < 1200) return "#00A900";
        else if (rating < 1500) return "#6666FF";
        else if (rating < 2200) return "#DDCC00";
        else return "#EE0000";
    }

    async getTopcoderInfo(handle) {
        // Use Topcoder official API
        const response = await fetch(
            "http://api.topcoder.com/v2/users/" + handle
        );
        const obj = await response.json();
        return obj;
    }

    async getTopcoderSvg(handle) {
        const obj = await this.getTopcoderInfo(handle);
        const handleTextLength = handle.length * 65;
        let idx = 0;
        for (idx = 0; idx < obj["ratingSummary"].length; idx++) {
            if (obj["ratingSummary"][idx].name === "Algorithm") {
                break;
            }
        }
        const rating = obj["ratingSummary"][idx]["rating"];
        const color = await this.getTopcoderColor(rating);
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="301" height="20" role="img"
        aria-label="topcoder">
        <title>topcoder</title>
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
            <text aria-hidden="true" x="355" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="590">topcoder</text>
                <text x="355" y="140" transform="scale(.1)" fill="#fff" textLength="590">topcoder</text>
                <text aria-hidden="true" x="1660" y="150" fill="#010101" fill-opacity=".0" transform="scale(.1)" textLength="610">${handle}</text>
                <text x="1660" y="140" transform="scale(.1)" fill="#fff" textLength="${handleTextLength}">${handle}</text>
                <text aria-hidden="true" x="2800" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="310">${rating}</text>
                <text x="2800" y="140" transform="scale(.1)" fill="#fff" textLength="310">${rating}</text>
        </g>
    </svg>`;
    }
}
