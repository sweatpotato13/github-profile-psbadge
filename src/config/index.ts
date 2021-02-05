/* eslint-disable @typescript-eslint/no-empty-function */
import { config as _config } from "dotenv";
_config({ path: __dirname + "/../../.env" });
(process as any).send = process.send || function () { };

export const config = {
    isProduction: process.env.NODE_ENV === "production",

    appName: process.env.APP_NAME || "github-profile-psbadge",
    appTitle: process.env.APP_TITLE || "github-profile-psbadge",
    appDescription:
        process.env.APP_DESCRIPTION ||
        "github-profile-psbadge",
    apiVersion: process.env.API_VERSION || "1.0",

    host: process.env.HOST || "0.0.0.0",
    port: parseInt(process.env.PORT) || 3000,
};
