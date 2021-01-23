import { Test, TestingModule } from "@nestjs/testing";

import { TopcoderController } from "./topcoder.controller";

describe("TopcoderController", () => {
    let controller: TopcoderController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TopcoderController],
        }).compile();

        controller = module.get<TopcoderController>(TopcoderController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
