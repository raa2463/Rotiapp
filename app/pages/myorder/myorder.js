var BasePage = require("../../shared/BasePage");

var MyOrderPage = function() {};
MyOrderPage.prototype = new BasePage();
MyOrderPage.prototype.constructor = MyOrderPage;

module.exports = new MyOrderPage();
