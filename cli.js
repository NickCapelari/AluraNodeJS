#!/usr/bin/env node

const pegaArquivo = require('./index');
const validaURLs = require('./http-validacao')

const chalk = require('chalk');

const caminho = process.argv;

async function processaTexto(caminhaDoArquivo) {
    const resultado = await pegaArquivo(caminhaDoArquivo[2]);
    if (caminho[3] === 'validar') {
        console.log(chalk.yellow('links validados'), await validaURLs(resultado));
    } else {
        console.log(chalk.yellow('lista de links'), resultado)
    }

}

processaTexto(caminho)
