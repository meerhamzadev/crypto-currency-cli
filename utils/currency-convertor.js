const axios = require('axios')
const { prompt } = require('inquirer');
const { yellow, green, white } = require('chalk')

const currencyConvertor = async () => {
    let questions = [
        {
            name: 'cryptoCurrency',
            type: 'input',
            message: 'Enter the crypto currency id> '
        },
        {
            name: 'localCurrency',
            type: 'input',
            message: 'Enter the local currency name> '
        },
    ]

    const { cryptoCurrency, localCurrency } = await questionAsker(questions);

    const currencyResponse = await axios.get(`https://api.coincap.io/v2/assets/${cryptoCurrency}`);
    const { priceUsd } = currencyResponse.data.data;

    const localCurrencyResponse = await axios.get(`https://api.coincap.io/v2/rates/${localCurrency}`);
    const { rateUsd, currencySymbol, symbol } = localCurrencyResponse.data.data;

    console.log(yellow.bold(`\nThe price of ${cryptoCurrency} in ${symbol} is   ${green(((1 / rateUsd) * priceUsd).toFixed(3))}${white(currencySymbol || symbol)}\n`));

}


const questionAsker = async (questions) => {
    const answer = await prompt(questions);
    return answer;
}

module.exports = currencyConvertor;