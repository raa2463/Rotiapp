var BasePage = require("../../shared/BasePage");

var SharePage = function() {};
SharePage.prototype = new BasePage();
SharePage.prototype.constructor = SharePage;

module.exports = new SharePage();
