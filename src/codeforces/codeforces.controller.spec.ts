import { Test, TestingModule } from "@nestjs/testing";

import { CodeforcesController } from "./codeforces.controller";

describe("ApiController", () => {
    let controller: CodeforcesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CodeforcesController],
        }).compile();

        controller = module.get<CodeforcesController>(CodeforcesController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
