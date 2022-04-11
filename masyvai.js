/*1.Sukurti masyą, kurio ilgis 20, o reikšmės skaičiai, nuo 1 iki 20.
 */

console.log(Array.from({ length: 20 }, (a, b) => b + 1));
console.log('---2nd example---');

const arr1 = [];

for(let i=1; arr1.push(i++)<20;);
console.log(arr1);

console.log('----3rd example----');

function fill(n) {
    return Array(n)
    .fill(0)
    .map((_, idx) => idx +1);
    }
    console.log(fill(20));

console.log("-----2-----------");
/*
// 2.Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.
// */

const arr = [];

for (let i = 20; i < 40; i++) {
  arr.push(ran(1, 60))
}

function ran(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log(arr);

console.log('----3----');
/*
3. Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 10 iki 15 , o reikšmės – atsitiktiniai skaičiai nuo 5 iki 47.Surasti didžiausia skaičių masyve, nenaudojant sort ir Math.max funkcijų.
*/
const arr3 = [];
function random(from, untill){
    return Math.floor(Math.random() * (from - untill +1))+untill;
}
for (let i=10; i<15; i++){
    arr3.push(random(5, 47))
}
console.log(arr3);

const biggestNum = (values) => {
    let highest = 0;
    for (let i=0; i<values.length; i+=1){
        if(values[i] > highest){
            highest = values[i];
        }
    }
    return highest
}
console.log(biggestNum(arr3));

console.log('----4------');
/*
4.Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės D, E, F, G, H. 20.
*/


const arr5 = [];
let str = 'DEFGH';
let multiStr = str.repeat(20);

console.log(Array.from(multiStr));
console.log('---5----------');
/*
5.Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo daugiausia.
*/

const arr6 = [];
let str2 = 'MNOP';
let multiStr2 = str2.repeat(25);
console.log(Array.from(multiStr2));

let countM = 0;
let countN = 0;
let countO = 0;
let countP = 0;

for (let i=0; i<arr6.length; i++){
    console.log(Math.max[arr6]);
}
console.log(Math.max(arr6));



console.log('----6-------');
/*
6.Sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve turi būti unikalios, tai yra – nesikartoti.
*/
let arr7 = [];
 
for(let i=0; i <20; i++) {
arr7.push(masyvas(10, 50))
}
function masyvas(min2, max2){
    return Math.floor(Math.random()*(max2 - min2 +1)+min2)
}
console.log(arr7);

console.log('---copy/paste ;)----');
function uV(limit, totalV){
    const uniqueValues = new Set();
    do{uniqueValues.add(Number((Math.random()*limit).toFixed()))}
    while (uniqueValues.size < totalV)
    return Array.from(uniqueValues);
}
console.log(uV(50, 20));