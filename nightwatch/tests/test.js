const selectors = require('../test_data/css_selectors.js');
const data = require('../test_data/test_data.js');
const functions = require('../test_data/test_functions.js');

module.exports = {
    beforeEach: browser => {
        browser.url('http://192.168.11.79:3000');
    },
    after: browser => {
        browser.end();
    },
    "Testing the header links": browser => {
        //This test is created for JIRA test case TES-7
        browser.url('http://192.168.11.79:3000');
        var pageList = [];
        for (var key in selectors.headerButtons) {
            if(selectors.headerButtons.hasOwnProperty(key)) {
                functions.buttonClick(selectors.headerButtons[key], browser)
                functions.getURL(browser)
            }
        }
        browser.pause(100)
    },
    "Enter information for donation": browser => {
        //This test corresponds to JIRA test case TES-24
        browser.url('http://192.168.11.79:3000/support');
        for (var key in selectors.donationFields) {
            if (selectors.donationFields.hasOwnProperty(key)) {
                if (key == 'exp') {
                    browser
                        .clearValue(selectors.donationFields[key])
                        .setValue(selectors.donationFields[key], data.goodDonationData.input[key])
                        .verify.value(selectors.donationFields[key], "2017-12-31")
                } else {
                    functions.enterValue(selectors.donationFields[key], data.goodDonationData.input[key], browser)
                }
            }
        }
        browser
            .click(selectors.buttons.submit)
            .pause(100)
    },
    "Error checking on entering bad data into donation fields": browser => {
        browser.url('http://192.168.11.79:3000/support');
        for (var key in selectors.donationFields) {
            if (selectors.donationFields.hasOwnProperty(key)) {
                if (key == 'exp') {
                    browser
                        .clearValue(selectors.donationFields[key])
                        .setValue(selectors.donationFields[key], data.badDonationData.input[key])
                        .verify.value(selectors.donationFields[key], "")
                } else if (key == 'amount') {
                    browser
                        .clearValue(selectors.donationFields[key])
                        .setValue(selectors.donationFields[key], data.badDonationData.input[key])
                        .verify.value(selectors.donationFields[key], "")
                } else {
                    functions.enterValue(selectors.donationFields[key], data.badDonationData.input[key], browser)
                }
            }
        }
        //browser.expect.element(selectors.donationFields.email).text.to.equal(data.badDonationData.output.email)
        //browser.expect.element(selectors.donationFields.amount).text.to.equal(data.badDonationData.fields.amount)
        //browser.expect.element(selectors.donationFields.ccNum).text.to.equal
        browser
            .click(selectors.buttons.submit)
            .pause(100)
    }
}