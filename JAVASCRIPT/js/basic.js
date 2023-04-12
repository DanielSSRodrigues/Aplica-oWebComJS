

// Variaveis//

//var nome = 'Mestre Yoda'
//var idade = 100
//var jedi = true

// Objetos // Funcionam como um super variavel 

var yoda = {}  // ao inserir {chaves} o JS entende que é um objeto
yoda.nome = 'Mestre Yoda'
yoda.idade = 100
yoda.jedi = true
console.log(yoda)

var yoda2 = {
nome: 'Mestre Yoda 2',
idade: 100,
jedi: true,
mostraIdade: function(){
    console.log(`A idade do ${this.nome} é ${this.idade} anos`)   //dentro de uma função vc usando `` apostolos ${vc passa o valor presente no objeto} isso é uma interpolação de string
} }
console.log(yoda2)
yoda2.mostraIdade()

//Constantes

const  nome = 'Darth Vader'  // constante quando utilizado, não poderá alterar o nome dessa variavel
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)