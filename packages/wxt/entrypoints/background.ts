import * as amplitude from "@amplitude/analytics-browser";
import { getBrowserType } from "./utils";

export default defineBackground(() => {
  // Do not track anything more than the install and browser type
  amplitude.init("3f5227f9da39547b9e7c806154c12715");
  browser.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === "install") {
      amplitude.logEvent("Extension Installed", {
        browserType: getBrowserType(),
      });
    }
  });
});
