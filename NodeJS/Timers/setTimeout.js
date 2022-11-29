const timeOut = 3000
const finished = () => console.log('done!');

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)

let count = 0

const counter = setInterval(() => {
    console.log(`${count++}`);
}, 1000)

setTimeout(() => clearInterval(counter), 4000)

