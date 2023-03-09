import * as url from "url";
import * as path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const config: WebdriverIO.Config = {
  runner: "local",
  
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "./tsconfig.json",
    },
  },

  specs: ["./test/features/*.feature"],

  exclude: [
    // 'path/to/excluded/files'
  ],

  capabilities: [
    {
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: [
          '--disable-gpu',
          '--window-size=1920,1080',
          '--start-maximized',
          '--disable-web-security',
          '--force-device-scale-factor=1'
        ]
      }
    },
  ],
  waitforTimeout: 10000,
  maxInstances: 5,
  logLevel: "info",
  outputDir: path.resolve(__dirname, "logs"),

  framework: "cucumber",

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "./test/reports/allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],
  cucumberOpts: {
    require: [
      "./test/step-definitions/given.ts",
      "./test/step-definitions/when.ts",
      "./test/step-definitions/then.ts",
    ],
  },
};
