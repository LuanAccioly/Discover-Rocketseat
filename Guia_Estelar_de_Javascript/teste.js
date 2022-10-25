// var é global e, também local

console.log('existe a var x antes do bloco?', x)
{var x = 0}
console.log('existe a var x dps do bloco?', x)

// let e const são locais e só funcionam no escopo onde foram criadas
{
    let y = 0
    console.log('existe a var y dps do bloco?', y)
}

