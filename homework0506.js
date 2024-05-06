/* 1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
 Po kiekvieno jų inicijavimo, išvesti į console
*/
console.log(' --- 1 ---');
const skaic1 = 45;
console.log(skaic1);
const skaic2 = 11;
console.log(skaic2);
const skaic3 = 4;
console.log(skaic3);

console.log(' --- 2 ---');
/* 2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/

const name01 = 'Monika';
console.log(name01);
const name02 = 'Hannah';
console.log(name02);
const name03 = 'Jenny';
console.log(name03);

console.log(' --- 3 ---');
/* 3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/

const darboVal = [7, 8.5, 8, 10, 7.5];
console.log(darboVal);

const darboVal1 = 10;
const darboVal2 = 2;
const darboVal3 = 8;
const darboVal4 = 4;
const darboVal5 = 6;
console.log('Darbo valandai (val)>>> ', darboVal[0]);
console.log('Darbo valandai (val)>>> ', darboVal[1]);
console.log('Darbo valandai (val)>>> ', darboVal[2]);
console.log('Darbo valandai (val)>>> ', darboVal[3]);
console.log('Darbo valandai (val)>>> ', darboVal[4]);

console.log(' -----');

let income1 = darboVal[0] * 11;
let income2 = darboVal[1] * 11;
let income3 = darboVal[2] * 11;
let income4 = darboVal[3] * 11;
let income5 = darboVal[4] * 11;
let income = [income1, income2, income3, income4, income5];
console.log('Uždirbo (euro)>>> ', income[0]);
console.log('Uždirbo (euro)>>> ', income[1]);
console.log('Uždirbo (euro)>>> ', income[2]);
console.log('Uždirbo (euro)>>> ', income[3]);
console.log('Uždirbo (euro)>>> ', income[4]);

console.log(' -----');

let give1 = income[0] * 0.75;
let give2 = income[1] * 0.75;
let give3 = income[2] * 0.75;
let give4 = income[3] * 0.75;
let give5 = income[4] * 0.75;
let give = [give1, give2, give3, give4, give5];
console.log('Išduoti (euro)>>> ', give[0]);
console.log('Išduoti (euro)>>> ', give[1]);
console.log('Išduoti (euro)>>> ', give[2]);
console.log('Išduoti (euro)>>> ', give[3]);
console.log('Išduoti (euro)>>> ', give[4]);

console.log(' --- 4 ---');

/* 4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/
const names = ["Monika", 'Hannah', 'Jenny', 'Josh', 'Nicholas'];
console.log(names);
const name1 = 'Monika';
const name2 = 'Hannah';
const name3 = 'Jenny';
const name4 = 'Josh';
const name5 = 'Nicholas';
console.log('Name => ',name1);
console.log('Name => ',name2);
console.log('Name => ',name3);
console.log('Name => ',name4);
console.log('Name => ',name5);

console.log(' -----');

const towns = ["Dartford", 'Cambridge', 'Orpington', 'Crawley', 'London'];
console.log(towns);
const towns1 = 'Dartford';
const towns2 = 'Cambridge';
const towns3 = 'Orpington';
const towns4 = 'Crawley';
const towns5 = 'London';
console.log('Town => ', towns1);
console.log('Town => ', towns2);
console.log('Town => ', towns3);
console.log('Town => ', towns4);
console.log('Town => ', towns5);

console.log(' -----');

const petNames = ["Fifa", 'Blot', 'Willow', 'Remy', 'Tilde'];
console.log(petNames);
const petNames1 = 'Fifa';
const petNames2 = 'Blot';
const petNames3 = 'Willow';
const petNames4 = 'Remy';
const petNames5 = 'Tilde';
console.log('Pet name => ', petNames1);
console.log('Pet name => ',petNames2);
console.log('Pet name => ',petNames3);
console.log('Pet name => ',petNames4);
console.log('Pet name => ',petNames5);