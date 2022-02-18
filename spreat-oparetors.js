const myArry = [5,34,3,46,2,4,6,34,6,3,634];
const myAnothersArry = [345,56,23];
const outPut = [...myAnothersArry, ...myArry,34];
const outPut1 = Math.min(...outPut)
console.log(outPut1);