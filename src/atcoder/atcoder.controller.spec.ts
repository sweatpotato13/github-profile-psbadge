import { Test, TestingModule } from "@nestjs/testing";

import { AtcoderController } from "./atcoder.controller";

describe("ApiController", () => {
    let controller: AtcoderController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AtcoderController],
        }).compile();

        controller = module.get<AtcoderController>(AtcoderController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
