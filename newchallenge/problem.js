const numbers = [1, 1, 2, 3, 5];
const pets = ["goldfish", "dog", "turtle", "tiger"]

var res = numbers.map(c=>c+5)
console.log(res)

const words = ["planes", "trains", "automobiles"];
var remove = words.map(r=>r.slice(0,r.length-1))
console.log(remove)


var returns = words.map(word=>word.slice(0,1))
console.log(returns)

var a = words.map(letter=>letter.charAt(0).toUpperCase()+letter.slice(1))
console.log(a)

var small = pets.filter(sword=> sword.length<=5 )
console.log(small)

var starting = pets.filter(begin=>begin.charAt(0)=='t')
console.log(starting)

var greater = numbers.filter(higher=>higher>4)
console.log(greater)

var evennum = numbers.filter(even=>even%2==0)
console.log(evennum)