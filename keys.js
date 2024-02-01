const computer = {
    brand : 'lenovo',
    price : 35000 , 
    processor : 'intel' ,
    hdd : '512gb' ,
    monitor : 'hp'
}

const kets  = Object.keys(computer);

console.log('keys name --',kets)

for(const i of kets){
    console.log(i , ":" , computer[i])
}

const valu = Object.values(computer);

console.log('values name -- ',valu);

for(const x of valu){
    console.log(x)
}

delete computer.brand;

computer.newBrand = 'Oppo'

console.log(computer)

for(const pop in computer){
    console.log(pop , computer[pop])
}