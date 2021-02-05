export interface ITopcoderUserInfo {
    handle: string;
    country: string;
    memberSince: string;
    quote: string;
    photoLink: string;
    copilot: boolean;
    ratingSummary: IRatingSummary[];
    achievements: IAchievements[];
    serverInformation: IServerInformation;
    requesterInformation: IRequesterInformation;
}

export interface IRatingSummary {
    name: string;
    rating: number;
    colorStyle: string;
}

export interface IAchievements {
    date: string;
    description: string;
}

export interface IServerInformation {
    serverName: string;
    apiVersion: string;
    requestDuration: number;
    currentTime: number;
}

export interface IRequesterInformation {
    id: string;
    remoteIP: string;
    receivedParams: IReceivedParams;
}

export interface IReceivedParams {
    apiVersion: string;
    handle: string;
    action: string;
}
