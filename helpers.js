const puppeter = require('puppeteer');

var page = null;
var browser = null;
const config = {
    headless: false, 
    args:['--no-sandox']
};

const navigate = async (url) => {
    browser = await puppeter.launch(config);
    page = await browser.newPage();
    await page.goto(url);
};

const click = async (element) => {
    await page.waitForSelector(element);
    await page.click(element);
};

const fillText = async (element, text) => {
    await page.waitForSelector(element);
    await page.type(element, text);
};

const seeElement = async (element) => {
    await page.waitForSelector(element)
};

const quitBrowser = async () => {
    await browser.close();
};

module.exports = {
    navigate,
    click,
    fillText,
    seeElement,
    quitBrowser
};