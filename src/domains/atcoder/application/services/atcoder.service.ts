import { Injectable } from "@nestjs/common";
import { AtcoderAggregate } from "@src/domains/atcoder/domainModel/aggregate/atcoder.aggregate";

@Injectable()
export class AtcoderService {
    constructor(private readonly atcoderManager: AtcoderAggregate) {}

    public async getAtcoderSvg(handle: string): Promise<string> {
        return await this.atcoderManager.getAtcoderSvg(handle);
    }
}
