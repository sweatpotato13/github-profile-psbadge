import { Injectable } from "@nestjs/common";
import { CodeforcesAggregate } from "@src/domains/codeforces/domainModel/aggregate/codeforces.aggregate";

@Injectable()
export class CodeforcesService {
    constructor(private readonly codeforcesManager: CodeforcesAggregate) {}

    public async getCodeforcesSvg(handle: string): Promise<string> {
        return await this.codeforcesManager.getCodeforcesSvg(handle);
    }
}
