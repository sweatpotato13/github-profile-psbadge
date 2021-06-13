/* eslint-disable @typescript-eslint/no-empty-function */
import { config as _config } from "dotenv";
_config({ path: __dirname + "/../../.env" });
(process as any).send = process.send || function () {};

import { loggerConfig } from "./modules/logger";

export { loggerConfig };

export const config = {
    // Base
    isProduction: process.env.NODE_ENV === "production",
    // General
    appName: process.env.APP_NAME || "boilerplate",
    appTitle: process.env.APP_TITLE || "boilerplate",
    appDescription: process.env.APP_DESCRIPTION || "boilerplate",
    // Server
    host: process.env.HOST || "0.0.0.0",
    port: parseInt(process.env.PORT) || 8000,
    rateLimitMax: process.env.RATE_LIMIT_MAX || 10000,

    codeforcesEndPoint:
        process.env.CODEFORCE_ENDPOINT ||
        "http://codeforces.com/api/user.info?handles=",
    atcoderEndPoint:
        process.env.ATCODER_ENDPOINT || "http://localhost:8000/user/",
    topcoderEndPoint:
        process.env.TOPCODER_ENDPOINT || "http://api.topcoder.com/v2/users/"
};
