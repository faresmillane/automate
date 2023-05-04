
const selectors = require('./selectors');
const action = require('./helpers');

const test = async (text) => {
    console.log('test in progress ...');
    await action.navigate(selectors.url);
    await action.click(selectors.cookies);
    await action.fillText(selectors.search_bar, text);
    await action.click(selectors.search_button);
    await action.seeElement(selectors.result);
    await action.quitBrowser();
    console.log('test fin ...');
};
 
const alltests = async () => {
    await test("davidson-consulting");
    await test("automation");
    await test("fares");
};

alltests();
