function charRank(victories, defeats){

let result = victories - defeats

if (result < 10) {
  console.log(`O herói tem um saldo de ${result} vitórias e está no nível Ferro`)
} else if (11 <= result && result <= 20 ) {
  console.log(`O herói tem um saldo de ${result} vitórias e está no nível Bronze`)
} else if (21 <= result && result <= 50) {
  console.log(`O herói tem um saldo de ${result} vitórias e está no nível Prata`)
} else if (51 <= result && result <= 80) { 
  console.log(`O herói tem um saldo de ${result} vitórias e está no nível Ouro`)
} else if (81 <= result && result <= 90) {
  return console.log(`O herói tem um saldo de ${result} vitórias e está no nível Diamante`)
} else if (91 <= result && result <= 100) {
  console.log(`O herói tem um saldo de ${result} vitórias e está no nível Lendário`)
} else if (result >= 101) {
  console.log(`O herói tem um saldo de ${result} vitórias e está no nível Imortal`)
}

}


console.log(charRank(100,6))