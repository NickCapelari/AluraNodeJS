const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Verifique o arquivo informado'));
}

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'UTF-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.green(texto))
  } catch (erro) {
    trataErro(erro)
  }

}
pegaArquivo('./arquivos/texto1.md')

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'UTF-8';
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => chalk.green(console.log(texto)))
//     .catch((erro) => trataErro(erro))
// }

// function pegaArquivo(caminhoDoArquivo){
//   const encoding = 'UTF-8'
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto)=>{
//       trataErro(erro)
//     }
//     console.log(chalk.green(texto));
//   })
// }


