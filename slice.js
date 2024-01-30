const address = 'andorkilla';
const part = address.slice(5,9);
console.log(part);

const sentence = 'Shafiqul Islam Sagor';

const par = sentence.split(' ');

console.log(par)

const person = ['sagor','rahim','mustakim','k','tmi'];

console.log(person.join('\\'));

const st = 'Shafiqul';
const md = 'Islam';
const lt = 'Sagor';

const fullName = st.concat(" ").concat(md).concat(' ').concat(lt) ;

console.log(fullName);

console.log(fullName.includes('I'))

const sentences = 'Shafiqul Islam Sagor';

let reverse = '';

for(const letter of sentences){
    reverse = letter + reverse
}
console.log(reverse)
let ulta = '';

for(let i = 0 ; i < sentences.length ; i++){
    const letter = sentences[i];
    console.log(letter);
    ulta = letter + ulta ;
}

console.log(ulta)


const shortUlta = sentences.split('').reverse().join('');

console.log(shortUlta)