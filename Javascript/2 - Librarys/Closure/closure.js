/*       Sem Closure

const nomeCompleto = "Rafael Barros de Queiroz"

const formataNome = nome => {
    const nomes = nome.split("")
    return nomes[0] + ' ' + nomes[nomes.length -1]
}

console.log(formataNome(nomeCompleto))
*/

// Closure //

const nomeCompleto = () => {
    const nome = 'Rafael Barros de Queiroz'

    const formataNome = () =>{
        const nomes = nome.split(" ")
        return nomes[0] + ' ' + nomes[nome.length -1]
    }
    return formataNome
}

const minhaClosure = nomeCompleto()

console.log(minhaClosure())