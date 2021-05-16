const chalk = require('chalk');
const axios = require('axios');

const search = async searchId => {

    const yellow = chalk.yellow.bold
    const green = chalk.green.bold

    const response = await axios.get(`https://api.coincap.io/v2/assets/${searchId}`)
    const { rank, symbol, name, priceUsd, volumeUsd24Hr, changePercent24Hr } = response.data.data;


    console.log(`\n
    ${yellow('Name:')} ${green(name)}                                                               
    ${yellow('Rank:')} ${rank}                                                                   
    ${yellow('Symbol:')} ${green(symbol)}                                                       
    ${yellow('price(USD):')} ${green((+priceUsd).toFixed(3))}$                                  
    ${yellow('traded in last 24hr(USD):')} ${green((+volumeUsd24Hr).toFixed(3))}$               
    ${yellow('%change in last 24hr:')} ${+changePercent24Hr > 0 ?
            green((+changePercent24Hr).toFixed(3)) + '%' :
            chalk.red.bold((+changePercent24Hr).toFixed(3)) + '%'}                                
    ----------------------------------------------------------------------------------------------
    `);

}

module.exports = search