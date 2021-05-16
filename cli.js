const { red, whiteBright, yellow } = require('chalk')
const all = require('./utils/all')
const search = require('./utils/search')
const converter = require('./utils/currency-convertor');
const id = require('./utils/id');


const cli = options => {

    if (options.all)
        all();


    else if (options.search !== undefined) {

        if (options.search === true) {
            return console.log(red.bold(`\n⚠️  Searching id is missing ⚠️\n`),
                yellow(`\nType ${whiteBright('crypto --id')} to get list of available crypto currency ids\n`))
        }

        search(options.search);
    }

    else if (options.convert)
        converter()

    else if (options.id)
        id();

}

module.exports = cli;