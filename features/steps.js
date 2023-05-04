const { Given, When, Then } = require('@cucumber/cucumber');
const selectors = require('../selectors');
const action = require('../helpers');

  Given('je navigue sur google', async function () {
    await action.navigate(selectors.url);
  });

  When('je vais accepter les cookies', async function () {
    await action.click(selectors.cookies);
  });

  When('je vais faire une recherche du mot cle {string}', async function (string) {
    await action.fillText(selectors.search_bar, string);
  });

  When('je clique sur recherche', async function () {
    await action.click(selectors.search_button);
  });

  Then('je verifie le resultat', async function () {
    await action.seeElement(selectors.result);
    await action.quitBrowser();
  });
