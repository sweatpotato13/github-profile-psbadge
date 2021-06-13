import { GetAtcoderBadgeDto } from "../../domain/dtos/get-atcoder-badge.dto";

export class AtcoderCard {
    width: number;
    height: number;
    user: GetAtcoderBadgeDto;

    constructor({ width = 420, height = 200, user }) {
        this.width = width;
        this.height = height;
        this.user = user;
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

    render() {
        const color = this.getAtCoderColor(this.user.rating);
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
        <image href="https://img.atcoder.jp/assets/atcoder.png" x="-5" y="20" height="120" width="120"/>
          <text x="135" y="20.5" class="header">${this.user.user}</text>
          <g transform="translate(135, 28)">
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
