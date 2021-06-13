import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { TopcoderCard } from "@src/modules/topcoder/infra/svgs/topcoder-card";
import { LoggerService } from "@src/shared/services";
import { GetTopcoderBadgeDto } from "../../dtos/get-topcoder-badge.dto";
import { GetTopcoderBadgeQuery } from "../impl/get-topcoder-badge.query";

@QueryHandler(GetTopcoderBadgeQuery)
export class GetTopcoderBadgeHandler
    implements IQueryHandler<GetTopcoderBadgeQuery>
{
    constructor(private readonly loggerService: LoggerService) {}

    async execute(command: GetTopcoderBadgeQuery) {
        const { data } = command;
        try {
            const param: GetTopcoderBadgeDto = { ...data };
            const card = new TopcoderCard({ user: param });
            return card.render();
        } catch (err) {
            this.loggerService.error(err.message);
            throw err.message;
        }
    }
}
