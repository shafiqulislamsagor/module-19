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