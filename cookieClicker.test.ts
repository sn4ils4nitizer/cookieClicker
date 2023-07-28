import { awaitExpression } from "@babel/types";
import { CookieClick } from "./cookiePageObject";
import { Driver } from "selenium-webdriver/chrome";

const clicker = new CookieClick;

test('click the cookie a lot of times', async () => {
    await clicker.navigate();
    await clicker.click(clicker.englishBtn);
    await clicker.driver.sleep(3000);
    await clicker.repeatClick(500, clicker.cookie);
    await clicker.click(clicker.cursorBtn);
    await clicker.repeatClick(4, clicker.grandmaBtn);
    await clicker.repeatClick(200, clicker.cookie);
    await clicker.click(clicker.legacyBtn);
    await clicker.click(clicker.ascendBtn);
    await clicker.driver.sleep(10000);
    await clicker.click(clicker.reincarnateBtn);
    await clicker.click(clicker.yesBtn);
    await clicker.driver.sleep(3000);
    await clicker.driver.quit();
}, 1000000);