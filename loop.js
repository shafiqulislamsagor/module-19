// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 },
//     { type: "Panda", year: 1910 }
// ];
// for (let i = 0; i < cars.length - 1; i++) {
//     for (let j = i + 1; j < cars.length; j++) {
//         if (cars[i].type > cars[j].type) {
//             const tem = cars[i];
//             cars[i] = cars[j];
//             cars[j] = tem;
//         }
//     }
// }
// console.log(cars)


const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
    { type: "Panda", year: 1910 }
];

for (let i = 0 ; i < cars.length ;i++){
    console.log(cars.sort(i))
}