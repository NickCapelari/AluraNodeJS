const pegaArquivo = require('../index');
const arrayResult = [{
  FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
}]

describe('pegaArquivo::', () => {
  it('deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function');
  })
  it('deve retornar array com resultados', async () => {
    const resultado = await pegaArquivo('D:/Alura/NodeJS/test/arquivos/texto1.md')
    expect(resultado).toEqual(arrayResult)
  })
  it('deve retornar msg que "não há links"', async () =>{
    const resultado = await pegaArquivo('D:/Alura/NodeJS/test/arquivos/texto1-semLinks.md')
    expect(resultado).toBe('não há links');
  })
  it('deve lançar um erro na falta de arquivo', async () => {
    await expect(pegaArquivo('D:/Alura/NodeJS/test/arquivos'))
    .rejects.toThrow(/não há arquivo no caminho/)
  })
  it('deve resolver a função com sucesso', async () => {
    await expect(pegaArquivo('D:/Alura/NodeJS/test/arquivos/texto1-semLinks.md')).resolves.toEqual(arrayResult)
  })
})


