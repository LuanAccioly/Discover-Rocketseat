/* function createPhrases(){
    console.log("djfsdifnsidfn");
}

createPhrases()

const sum = (a, b) => {
    return a+b
}

console.log(sum(1,2));  */

function Person(name, age, adress){
    this.name = name
    this.age = age
    this.adress = adress
    this.andar = () => {
        console.log(this.name + " está andando")
    }
}

const luan = new Person("Luan", 21, "casa mt engraçada")

luan.andar()