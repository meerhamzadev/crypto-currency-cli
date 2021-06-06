const { red, whiteBright, yellow } = require('chalk');
const header = require('./utils/header');
const all = require('./utils/all')
const search = require('./utils/search')
const converter = require('./utils/currency-convertor');
const id = require('./utils/id');
const footer = require('./utils/footer');

const cli = async options => {
    header();

    if (options.all)
        await all();


    else if (options.search !== undefined) {

        if (options.search === true) {
            return console.log(red.bold(`\n⚠️  Searching id is missing ⚠️\n`),
                yellow(`\nType ${whiteBright('crypto --id')} to get list of available crypto currency ids\n`))
        }

        await search(options.search);
    }

    else if (options.convert)
        await converter()

    else if (options.id)
        await id();

    footer();
}

module.exports = cli;