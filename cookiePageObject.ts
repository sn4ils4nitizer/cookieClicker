import {By} from 'selenium-webdriver';
import { BasePage } from './basePage';

export class CookieClick extends BasePage {
    // selectors
    englishBtn: By = By.xpath('//div[@id="langSelect-EN"]');
    cookie: By = By.xpath('//button[@id="bigCookie"]')
    cursorBtn: By = By.xpath('(//div[@class="product unlocked enabled"])[1]');
    grandmaBtn: By = By.xpath('(//div[@class="product unlocked enabled"])[2]');
    legacyBtn: By = By.xpath('//div[text()="Legacy"]');
    ascendBtn: By = By.xpath('//a[text()="Ascend"]');
    reincarnateBtn: By = By.xpath('//a[@id="ascendButton"]');
    yesBtn: By = By.xpath('//a[@id="promptOption0"]');

    constructor() {
        super({url: "https://orteil.dashnet.org/cookieclicker/"})
    };

    //methods
    async repeatClick(num, button) {
        for (let i=0; i<num; i++){
                await this.click(button);
        };
    };
    

};