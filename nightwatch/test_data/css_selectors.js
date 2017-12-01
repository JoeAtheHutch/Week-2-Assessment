module.exports = {
    fields: {
        
    },
    donationFields: {
        email: 'input[name="email"]',
        amount: 'input[name="amount"]',
        ccNum: 'input[name="card"]',
        cvc: 'input[name="cvc"]',
        exp: 'input[name="exp"]'

    },
    donationMessages: {
        email: 'div[class="donate-error-message"]',
        amount: '300',
        ccNum: '1234 4567 8910 9876',
        cvc: '456',
        exp: '12/31/2017'
    },
    buttons: {
        submit: 'button[class="donate-btn"]'
    },
    headerButtons: {
        headerHome: 'a[name="headerHome"]',
        headerCalendar: 'a[name="headerCalendar"]',
        headerAbout: 'a[name="headerAbout Us"]',
        headerMedia: 'a[name="headerMedia"]',
        headerBlog: 'a[name="headerBlog"]',
        headerSupport: 'a[name="headerSupport Us"]'
    },
    messages: {
        header: 'p[id="validHeader"]',
        errorList: 'list[id="errorList"]',
        queryTitle: 'span[name="queryTitle"]',
        assembledQuery: 'span[name="queryBody"]'
    }
}