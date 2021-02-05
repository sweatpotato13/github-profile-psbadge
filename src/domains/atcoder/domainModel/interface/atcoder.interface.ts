export interface IAtcoderUserInfo {
    data: IData;
}

export interface IData {
    birth_year: number;
    competitions: number;
    country: string;
    formal_country_name: string;
    highest_rating: number;
    rank: number;
    rating: number;
    updated: string;
    user_color: string;
    wins: number;
}
