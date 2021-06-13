import { IQuery } from "@nestjs/cqrs";
import { GetAtcoderBadgeDto } from "../../dtos/get-atcoder-badge.dto";

export class GetAtcoderBadgeQuery implements IQuery {
    constructor(public readonly data: GetAtcoderBadgeDto) {}
}
