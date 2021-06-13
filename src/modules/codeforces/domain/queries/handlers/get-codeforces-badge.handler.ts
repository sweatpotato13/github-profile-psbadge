import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { CodeforcesCard } from "@src/modules/Codeforces/infra/svgs/Codeforces-card";
import { LoggerService } from "@src/shared/services";
import { GetCodeforcesBadgeDto } from "../../dtos/get-codeforces-badge.dto";
import { GetCodeforcesBadgeQuery } from "../impl/get-codeforces-badge.query";

@QueryHandler(GetCodeforcesBadgeQuery)
export class GetCodeforcesBadgeHandler
    implements IQueryHandler<GetCodeforcesBadgeQuery>
{
    constructor(private readonly loggerService: LoggerService) {}

    async execute(command: GetCodeforcesBadgeQuery) {
        const { data } = command;
        try {
            const param: GetCodeforcesBadgeDto = { ...data.result[0] };
            const card = new CodeforcesCard({ user: param });
            return card.render();
        } catch (err) {
            this.loggerService.error(err.message);
            throw err.message;
        }
    }
}
