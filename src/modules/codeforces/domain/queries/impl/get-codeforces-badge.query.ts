import { IQuery } from "@nestjs/cqrs";

export class GetCodeforcesBadgeQuery implements IQuery {
    constructor(public readonly data: any) {}
}
