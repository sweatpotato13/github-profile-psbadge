import { IQuery } from "@nestjs/cqrs";

export class GetTopcoderBadgeQuery implements IQuery {
    constructor(public readonly data: any) {}
}
