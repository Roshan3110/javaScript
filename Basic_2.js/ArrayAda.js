let marverHeros = ["Ironman" , "Thor" ,"CaptanAmerica"];
let  Dc_Heros = ["Batman" , "Superman" ,"flash"];


// marverHeros.push(Dc_Heros);
// console.log(marverHeros);

marverHeros.concat(Dc_Heros);
let allHeros = marverHeros.concat(Dc_Heros);

console.log(allHeros);
console.log(marverHeros);


let NewHeros = [...marverHeros, ...Dc_Heros];
console.log(NewHeros);


const real_another_arrav = [1,2,4, [5,2,1],8,9,3,[4,2,[45,7,32]]];

let NewOther_array = real_another_arrav.flat(Infinity);
console.log(NewOther_array);


console.log(Array.isArray("Roshan"));
console.log(Array.from("Roshan"));
console.log(Array.from('1242'));
console.log(Array.from({name : "Roshan"})) // intersting



let score = 100;
let  score2  = 200;
let  score3 = 3000;


console.log(Array.of(score,score2,score3));