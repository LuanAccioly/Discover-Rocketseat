function transformarNotas(nota){
    if(nota >= 90){return 'A'}
    else if(nota >= 80){return 'B'}
    else if(nota >= 70){return 'C'}
    else if(nota >= 60){return 'D'}
    else return 'F'
}

let familia = {
    receitas: [10,10,10],
    despesas: [15,15,15]
}

function soma(valor){
    let valorSoma = 0

    valor.forEach(i => {
        valorSoma += i
    });

    return valorSoma
}
/* console.log(`A situação deste mês é de ${soma(familia.receitas) - soma(familia.despesas)}`); */

function CtoF(x){
    let temperature = x.toUpperCase()
    let temperatureNumber = parseInt(removeLetter(temperature))


    
    return temperature.includes('C') ? (temperatureNumber * 9/5 + 32) : ((temperatureNumber  - 32) * 5/9)
}

function removeLetter(string){
    return string.replace('C', '').replace('F', '')
}/* 
============================================================================================ */

/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/


const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionaria",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T",
            }
        ]
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }
        ]
    }
]

function countCategories(){

    for(let i of booksByCategory){
        console.log(`Total de livros da categoria ${i.category}: ${i.books.length}`);
    }
}

function countAuthors(){
    let authors= []

    for(let category of booksByCategory){
        for(let book of category.books){
            if(!authors.includes(book.author)){
                authors.push(book.author)
            }
        }
    }
    return authors.length;
}

function searchByAuthor(author){

    let books = []
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author == author){
                books.push(book.title)
            }
        }
    }
    return books
}


countCategories();
console.log('Total de autores: ' + countAuthors());
console.log(searchByAuthor("Augusto Cury"))
