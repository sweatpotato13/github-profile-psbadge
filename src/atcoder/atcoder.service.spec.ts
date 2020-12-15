import { Test, TestingModule } from "@nestjs/testing";

import { AtcoderService } from "./atcoder.service";

describe("ApiService", () => {
    let service: AtcoderService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AtcoderService],
        }).compile();

        service = module.get<AtcoderService>(AtcoderService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
