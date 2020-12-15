import { Test, TestingModule } from "@nestjs/testing";

import { CodeforcesService } from "./codeforces.service";

describe("CodeforcesService", () => {
    let service: CodeforcesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CodeforcesService],
        }).compile();

        service = module.get<CodeforcesService>(CodeforcesService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
