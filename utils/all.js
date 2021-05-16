const axios = require('axios');

const all = async () => {
    const response = await axios.get(`https://api.coincap.io/v2/assets`);

    let data = response.data.data.slice(0, 10).map(dataFragment => ({
        name: dataFragment.name,
        rank: +dataFragment.rank,
        symbol: dataFragment.symbol,
        'price(USD)': +(+dataFragment.priceUsd).toFixed(3),
        'traded in last 24hr(USD)': +(+dataFragment.volumeUsd24Hr).toFixed(3),
        '%change in last 24hr': +(+dataFragment.changePercent24Hr).toFixed(3)

    }));

    console.table(data);
}

module.exports = all;
