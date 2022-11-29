# Timers

Uma maneira de trabalharmos com o tempo dentro do NodeJS

## O que aprendi

- [x] [setTimeout | clearTimeout](#settimeout)
- [ ] setInterval | clearInterval

## Praticar um pouco mais de

- [ ] Assíncronismo
- [ ] Callbacks

### setTimeout | clearTimeout

`setTimeout()` - Vai rodar uma função depois de x milissegundos

`clearTimeout()` - Vai cancelar o timeout passado como parametro 

```javascript
const timeOut = 3000
const finished = () => console.log('done!');

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)
```

### setInterval | clearInterval

`setInterval()` - Irá rodar uma função N vezes depois de X milissegundos
`clearInterval()` - Irá cancelar um `setInterval` registrado

```javascript
let count = 0

const counter = setInterval(() => {
    console.log(`${count++}`);
}, 1000)

setTimeout(() => clearInterval(counter), 4000)
```