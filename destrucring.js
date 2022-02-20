
// array
const myArray= [ 234,325,23,53,34,5,2,3,3,5566,2];
const [first, second, third] = myArray;
// console.log(second);
// object 
const laptop = {
    names: 'hp',
    RAM: '8gb',
    storage: '1tb',
    ssd: '128gb'
}
const {names, RAM} = laptop;
// console.log(RAM);
const phoneDetails = {
    brand:{
        name: 'Nokina',
        price: 4000,
        guranty: '2 Year'
    }
}
const {name, guranty} = phoneDetails.brand;
console.log(guranty);