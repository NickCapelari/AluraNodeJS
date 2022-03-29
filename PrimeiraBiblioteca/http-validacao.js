const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

function manejaErro(erro) {
    throw new Error(erro.message)
}

async function checaStatus(arrayDeURLs) {
    try {
        const arrayDeStatus = await Promise
            .all(arrayDeURLs
                .map(async url => {
                    const res = await fetch(url)
                    return `${res.status} - ${res.statusText}`;
                }))
        return arrayDeStatus;
    } catch (erro) {
        manejaErro(erro)
    }
}

function geraArrayDeURLs(arrayLinks) {
    //loop para cada {chave : valor}
    //objeto --> [valor]
    //Object.values(objeto)
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join());
}

async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links)
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice]
    }))
    return resultados;
}

module.exports = validaURLs;