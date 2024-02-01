const computer = {
    brand : 'lenovo',
    price : 35000 , 
    processor : 'intel' ,
    hdd : '512gb' ,
    monitor : 'hp'
}

const kets  = Object.keys(computer);

console.log('keys name --',kets)

const valu = Object.values(computer);

console.log('values name -- ',valu);

delete computer.brand;

console.log(computer)