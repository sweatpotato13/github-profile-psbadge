import { Injectable } from "@nestjs/common";
import { TopcoderAggregate } from "@src/domains/topcoder/domainModel/aggregate/topcoder.aggregate";

@Injectable()
export class TopcoderService {
    constructor(private readonly topcoderManager: TopcoderAggregate) {}

    public async getTopcoderSvg(handle: string): Promise<string> {
        return await this.topcoderManager.getTopcoderSvg(handle);
    }
}
