const welcome = require('cli-welcome');
const pkgJSON = require('../package.json');

module.exports = () => {
    welcome({
        title: `crypto-currency-cli`,
        tagLine: `by ${pkgJSON.author.name}`,
        description: `${pkgJSON.description}`,
        bgColor: `#00ff00`,
        color: `#000000`,
        bold: true,
        clear: true,
        version: `${pkgJSON.version}`
    });
}

