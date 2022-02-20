class Study {
    name;
    roll = 123;
    age = 16;
    marks = 78;
    constructor (name, mark) {
        this.name = name;
        this.marks = mark;
    }
    myFunction (){
        console.log('Barguna Polytechnic institute');
    }
}
const Tanvir  = new Study('Md. Tanvir Alam', 90);
Tanvir.myFunction()
console.log(Tanvir);