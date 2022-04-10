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

function multNum (arr4){
    let output = [];

    for (let x of arr4)
        output.push(x * arr4.lenth);
        return output
}
console.log(multNum(['D', 'E', 'F', 'G', 'H']));


/*
5.Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo daugiausia.
*/

/*
6.Sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve turi būti unikalios, tai yra – nesikartoti.
*/
