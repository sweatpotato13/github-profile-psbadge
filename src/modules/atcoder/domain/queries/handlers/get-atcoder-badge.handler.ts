import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { AtcoderCard } from "@src/modules/atcoder/infra/svgs/atcoder-card";
import { LoggerService } from "@src/shared/services";
import { GetAtcoderBadgeDto } from "../../dtos/get-atcoder-badge.dto";
import { GetAtcoderBadgeQuery } from "../impl/get-atcoder-badge.query";

@QueryHandler(GetAtcoderBadgeQuery)
export class GetAtcoderBadgeHandler
    implements IQueryHandler<GetAtcoderBadgeQuery>
{
    constructor(private readonly loggerService: LoggerService) {}

    async execute(command: GetAtcoderBadgeQuery) {
        const { data } = command;
        try {
            const param: GetAtcoderBadgeDto = { ...data };
            const card = new AtcoderCard({ user: param });
            return card.render();
        } catch (error: any) {
            this.loggerService.error(error.message);
            throw error.message;
        }
    }
}
