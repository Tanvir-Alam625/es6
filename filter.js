const myName = ['tanvir', 'alam', "hasan", 'kulsum'];
const getFilterValue = myName.filter(name=> name.length % 2 != 0);
console.log(getFilterValue);