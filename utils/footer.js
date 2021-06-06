const chalk = require('chalk');

module.exports = () => {
    console.log('');
    console.log(
        chalk.hex('#FAD000').inverse(' Star '),
        'the CLI->',
        chalk.dim('https://github.com/MeerHamza1421/crypto-currency-cli\n')
    );
};