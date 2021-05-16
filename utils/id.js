const axios = require('axios')

const id = async () => {
    const idResponse = await axios.get(`https://api.coincap.io/v2/assets`);
    const ids = idResponse.data.data.map(({ id }) => id)
    console.table(ids);
}

module.exports = id;