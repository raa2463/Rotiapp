var BasePage = require("../../shared/BasePage");

var HelpPage = function() {};
HelpPage.prototype = new BasePage();
HelpPage.prototype.constructor = HelpPage;

module.exports = new HelpPage();
