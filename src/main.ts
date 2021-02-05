import { config } from "@config";
import { NestFactory } from "@nestjs/core";
import { LoggerModule } from "@src/logger/logger.module";
import { LoggerService } from "@src/logger/logger.service";

import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const loggerService = app.select(LoggerModule).get(LoggerService);
    try {
        app.setGlobalPrefix(`v${config.apiVersion}`);
        await app.listen(config.port, () => {
            !config.isProduction
                ? loggerService.info(
                      `🚀  Server ready at http://${config.host}:${config.port}/${config.apiVersion}`,
                      { context: "BootStrap" }
                  )
                : loggerService.info(
                      `🚀  Server is listening on port ${config.port}`,
                      { context: "BootStrap" }
                  );
            !config.isProduction &&
                loggerService.info(
                    `🚀  Subscriptions ready at ws://${config.host}:${config.port}/${config.apiVersion}`,
                    { context: "BootStrap" }
                );
        });
    } catch (error) {
        loggerService.error(`❌  Error starting server, ${error}`, {
            context: "BootStrap",
        });
        process.exit();
    }
}
bootstrap();
