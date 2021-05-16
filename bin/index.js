#!/usr/bin/env node
const program = require('commander');
const cli = require('../cli')
const { version } = require('../package.json')

program
    .version(`${version}`)
    .description('a cli tool to get real time info related to crypto currency')

program
    .option('-a, --all', 'to display first 10 crypto currencies')
    .option('-s, --search [value]', 'to search a particular crypto currency by its id')
    .option('-c, --convert', 'to convert crypto currency price from USD to local currency')
    .option('--id', 'to get id list of all available crypto currencies')

program.parse(process.argv)
const options = program.opts();
cli(options)
