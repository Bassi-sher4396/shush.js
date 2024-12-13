const marvel_heroes= ["thor","ironman","spidy"]
const dc_heroes = ["superman", "flash","batman"]
//marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);//array ke andar array represnt hoga
//console.log(marvel_heroes[3][1]);//to access flash
const allHeroes =marvel_heroes.concat(dc_heroes)//combines two arrays to one

console.log(allHeroes);

const all_new_heroes= [...marvel_heroes,...dc_heroes]//spread method  sab array ke elements ko tod ke ek sath
console.log(all_new_heroes);
const another_Array =  [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_Array = another_Array.flat(1)//array ke andar ke arrays ko hataega according to depth in bracket
console.log(real_another_Array);



console.log(Array.isArray('hitesh'))
console.log(Array.from('hitesh'));
console.log(Array.from({name:'hitesh'}));//interesting
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))