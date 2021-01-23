import { Test, TestingModule } from "@nestjs/testing";

import { TopcoderService } from "./topcoder.service";

describe("TopcoderService", () => {
    let service: TopcoderService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TopcoderService],
        }).compile();

        service = module.get<TopcoderService>(TopcoderService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
