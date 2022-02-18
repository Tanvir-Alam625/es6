//simple arow function 
const myFunction = (number1, number2) => number1 * number2;
console.log(myFunction(9,34));
/// simple arow function without arguments 
const myFunction1 = ()=> 54+4;
console.log(myFunction1());
// multiline arow function 
const myFunction3= (event)=>{
    const strings = `this is multiline  arow function ${event}`;
    return strings;
}
console.log(myFunction3('Amiiii'));