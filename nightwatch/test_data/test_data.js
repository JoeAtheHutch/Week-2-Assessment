module.exports = {
    goodData: {
        input: {
            email: 'email.mine@gmail.com',
            amount: '300',
            ccNum: '1234 4567 8910 9876',
            cvc: '456',
            exp: '12/31/2017'
        },
        output: {
            header: 'dummy text'
        }
    },
    goodDonationData: {
        input: {
            email: 'email.mine@gmail.com',
            amount: '300',
            ccNum: '1234 4567 8910 9876',
            cvc: '456',
            exp: '12/31/2017'
        },
        output: {
            header: 'dummy text'
        }
    },
    badDonationData: {
        input: {
            email: 'email.mine@gmailcom',
            amount: 'abc',
            ccNum: '1234 4567 876A',
            cvc: '1l6',
            exp: '12/05/yyyy'
        },
        output: {
            email: 'You must enter a valid email',
            amount: 'You must enter an amount',
            ccNum: 'You must enter a valid credit card number',
            cvc: 'You must enter a valid cvc',
            exp: 'You must enter a valid date'
        },
        fields: {
            email: 'You must enter a valid email',
            amount: 'You must enter an amount',
            ccNum: 'You must enter a valid credit card number',
            cvc: 'You must enter a valid cvc',
            exp: 'You must enter a valid date'
        }
    }
}