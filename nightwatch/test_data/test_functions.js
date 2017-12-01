module.exports = {
    enterValue: (selector, input, browser) => {
        browser
            .clearValue(selector)
            .setValue(selector, input)
            .verify.value(selector, input)
    },
    getURL: browser => {
        browser.url(function (response) {
            console.log(response.value);
            return response.value;
        });
    },
    buttonClick: (selector, browser) => {
        browser
            .click(selector)
            .pause(500)
    }
}