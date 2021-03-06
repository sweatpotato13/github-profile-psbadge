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

export const codeforcesIcon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
<style type="text/css">
    .st0{fill:#AE0F0A;}
    .st1{fill:#4F81C1;}
    .st2{fill:#FFD400;}
</style>
<path class="st0" d="M22.5,10.5c0.8,0,1.5,0.7,1.5,1.5v7.5c0,0.8-0.7,1.5-1.5,1.5h-3c-0.8,0-1.5-0.7-1.5-1.5V12c0-0.8,0.7-1.5,1.5-1.5H22.5z"/>
<path class="st1" d="M13.5,3C14.3,3,15,3.7,15,4.5v15c0,0.8-0.7,1.5-1.5,1.5h-3C9.7,21,9,20.3,9,19.5v-15C9,3.7,9.7,3,10.5,3H13.5z"/>
<path class="st2" d="M4.5,7.5C5.3,7.5,6,8.2,6,9v10.5C6,20.3,5.3,21,4.5,21h-3C0.7,21,0,20.3,0,19.5V9c0-0.8,0.7-1.5,1.5-1.5H4.5z"/>
</svg>`

export class Card {
    width: number;
    height: number;
    user: IData;

    constructor({ width = 420, height = 200, user }) {
        this.width = width;
        this.height = height;
        this.user = user;
    }

    render() {
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
            color: blue;
          }
        </style>
        <rect
          data-testid="card-bg"
          x="0.5"
          y="0.5"
          rx="4.5"
          height="99%"
          width="99%"
          stroke="#FF0000"
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
                ${this.user.organization === undefined ? "No organization" : this.user.organization}
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
