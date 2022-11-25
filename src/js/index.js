const livraria = [
    {
        id: 2,
        nome: 'Pequeno Príncipe',
        preco: 9.99,
        autor: 'Antoine de Saint-Exupéry'
    },
    {
        id: 3,
        nome: 'Dom Casmurro',
        preco: 9.99,
        autor: 'Machado de Assis'
    },
    {
        id: 4,
        nome: 'Box Trilogia O Senhor Dos Anéis',
        preco: 150.00,
        autor: 'John R. R. Tolkien'
    },
    {
        id: 5,
        nome: 'A Culpa é das Estrelas',
        preco: 24.99,
        autor: 'John Green'
    },
    {
        id: 6,
        nome: 'O Iluminado',
        preco: 64.90,
        autor: 'Stephen King'
    },
    {
        id: 7,
        nome: 'Duna',
        preco: 99.99,
        autor: 'Frank Herbert'
    },
    {
        id: 8,
        nome: 'O Hobbit',
        preco: 69.99,
        autor: 'John R. R. Tolkien'
    },
    {
        id: 9,
        nome: 'O Homem de Giz',
        preco: 69.90,
        autor: 'C.J. Tudor'
    },
    {
        id: 10,
        nome: 'O Menino Feito de Blocos',
        preco: 54.90,
        autor: 'Keith Stuart'
    },
    {
        id: 11,
        nome: 'O Extraordinário',
        preco: 59.90,
        autor: 'Raquel Jaramillo Palacio'
    },
]
console.log(livraria.unshift({
    id: 1,
    nome: 'O Grande Conflito',
    preco: 19.00,
    autor: 'Ellen G. White'
},))
console.log(livraria.splice(7,2))


console.log('Livros disponíveis:')
for (const livro of livraria) {
    console.log(livro.nome + ', R$' + livro.preco + ', ' + livro.autor)
}

console.log(livraria.length)
