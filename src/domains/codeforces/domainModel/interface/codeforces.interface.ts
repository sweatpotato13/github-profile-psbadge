import { codeforcesIcon } from "@src/asset/icon";

export interface ICodeforceUserInfo {
    status: string;
    result: IData[];
}

export interface IData {
    handle: string;
    email: string;
    vkId: string;
    openId: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    organization: string;
    contribution: number;
    rank: string;
    rating: number;
    maxRank: string;
    maxRating: number;
    lastOnlineTimeSeconds: number;
    registrationTimeSeconds: number;
    friendOfCount: number;
    avatar: string;
    titlePhoto: string;
}

export class Card {
    width: number;
    height: number;
    user: IData;
    color: string;

    constructor({ width = 420, height = 200, user }) {
        this.width = width;
        this.height = height;
        this.user = user;
    }

    getCodeforcesColor(rank: string): string {
        if (rank === "legendary grandmaster") return "#FF0000";
        if (rank === "international grandmaster") return "#FF0000";
        if (rank === "grandmaster") return "#FF0000";
        if (rank === "international master") return "#FF8C00";
        if (rank === "master") return "#FF8C00";
        if (rank === "candidate master") return "#AA00AA";
        if (rank === "expert") return "#0000FF";
        if (rank === "specialist") return "#03A89E";
        if (rank === "pupil") return "#008000";
        if (rank === "newbie") return "#808080";
    }

    render() {
        const color = this.getCodeforcesColor(this.user.rank);
        return `<svg
          width="${this.width}"
          height="${this.height}"
          viewBox="0 0 ${this.width} ${this.height}"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:xhtml="http://www.w3.org/1999/xhtml"
        >
          <style>
          @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&amp;display=swap');
          * {
            font-family: 'Inter', 'Noto Sans KR', sans-serif;
          }
          text {
            fill: black;
          }
          .icon {
            filter: drop-shadow(rgba(0, 212, 151, 0.6) 0px 4px 8px);
          }
          .header {
            font-weight: 700;
            font-size: 20px;
          }
          .organization {
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline-block;
            width: 400px;
            height: 30px;
            white-space: nowrap;
          }
          .flex-column {
            display: flex;
            flex-direction: column;
            width: 250px;
            height: 120px;
            justify-content: flex-end;
          }
          .item-box {
            margin-left: 12px;
            padding-right: 10px;
            padding-bottom: 10px;
          }
          .item-title {
            font-weight: 400;
            font-size: 16px;
          }
          .item-number {
            font-weight: 600;
            font-size: 20px;
            text-align: left;
            color: ${color};
          }
        </style>
        <rect
          data-testid="card-bg"
          x="0.5"
          y="0.5"
          rx="4.5"
          height="99%"
          width="99%"
          stroke="${color}"
          stroke-width = "2"
          fill="#FFFEFE"
        />
        <g class="profile" data-testid="card-title" transform="translate(20, 20)">
          <foreignObject class="icon" width="100" height="100" x="8" y="20">
            ${codeforcesIcon}
          </foreignObject>
          <text x="135" y="20.5" class="header">${this.user.handle}</text>
          <g transform="translate(135, 28)">
            <foreignObject width="200" height="100">
              <xhtml:span class="organization">
                ${
                    this.user.organization === undefined
                        ? "No organization"
                        : this.user.organization
                }
              </xhtml:span>
            </foreignObject>
          </g>
        </g>
        <g transform="translate(43, 60)">
          <foreignObject width="300" height="300" x="100" y="3">
            <xhtml:div class="flex-column box">
              <xhtml:div class="item-box box">
                <xhtml:div class="item-title">Rank</xhtml:div>
                <xhtml:div class="item-number">${this.user.rank}</xhtml:div>
              </xhtml:div>
              <xhtml:div class="item-box box">
                <xhtml:div class="item-title">Rating</xhtml:div>
                <xhtml:div class="item-number">${this.user.rating}</xhtml:div>
              </xhtml:div>
            </xhtml:div>
          </foreignObject>
        </g>
        </svg>`;
    }
}
