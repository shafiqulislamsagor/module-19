// const point = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const revarse = [];

// console.log(point.length)

// while (point < point.length) {
//     // revarse = revarse.push(point)
//     console.log(point)
//     point++;
// }

// console.log(revarse)

const point = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const reversedPoint = [];

// while ( 0 <= point.length -1) {
//     let revarse = point[point.length -1]
//     reversedPoint.push(revarse);
//     point.length--;
// }

// console.log(reversedPoint);

const rev = [];

for(const num of point){
    console.log(num)
    rev.unshift(num)
}
console.log(rev)