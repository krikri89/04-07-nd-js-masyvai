/*1.Sukurti masyą, kurio ilgis 20, o reikšmės skaičiai, nuo 1 iki 20.
*/


console.log(Array.from({length: 20}, (a, b) => b+1))
console.log('-----2-----------');
/*
2.Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.
*/
let nuo = 40;
let iki = 60;

for (let i= 0; i < 5; i++){
    const random = Math.floor(Math.random()* (iki - nuo + 1))
    console.log(random);

    console.log(Array.from({random}));
}

/*
3. Sukurti atsitiktinio ilgio masyva, kurio ilgis nuo 10 iki 15 , o reikšmės – atsitiktiniai skaičiai nuo 5 iki 47.Surasti didžiausia skaičių masyve, nenaudojant sort ir Math.max funkcijų.
*/

/*
4.Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės D, E, F, G, H. 20.
*/

/*
5.Sukurti masyvą, kurio ilgis 100, o reikšmės – raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo daugiausia.
*/

/*
6.Sugeneruoti masyvą, kurio ilgis 20, o reikšmės masyve turi būti nuo 10 iki 50. Reikšmės masyve turi būti unikalios, tai yra – nesikartoti.
*/