// common class 
class MyProducts {
    name;
    price = 50000;
    constructor(name, price){
        this.name = name;
        this.price = price;

    }

}
// laptop class 
class laptop extends MyProducts {
    Ram = '4gb';
    constructor(name, price, Ram){
        super(name, price,  Ram)
        this.Ram = Ram;

    }
    myFunction(version){
        console.log(this.name, 'yeah! I am release', version);
    }
}
// phone class 
class phone extends MyProducts {
    color = 'lightblue';
    constructor(name, price, color){
        super(name, );
        this.price = price;
        this.color = color;
    }
    myFunction(version){
        console.log(this.name, 'yeah! I am release', version);
    }
}
// watch class 
class watch extends MyProducts {
    color;
    constructor(name, price ,color){
        super(name, price)
        this.color = color;
    }
    myFunction(version){
        console.log(this.name, 'yeah! I am release', version);
    }
}
// modem class 
class modem extends MyProducts {
    memorySupported;
    constructor (name, price, memory){
        super(name, price)
        this.memorySupported = memory;
    }
    myFunction(version){
        console.log(this.name, 'yeah! I am release', version);
    }
}
// calling 
// laptop
// const myLaptop = new laptop('hp',60000 ,'16gb');
// myLaptop.myFunction('12.23.2')
// console.log(myLaptop);
//phone 
// const myPhone = new phone('samsung', 12000, 'green');
// myPhone.myFunction('1.3.4')
// console.log(myPhone);
// watch
// const myWatch = new watch('apple', 20000, 'black');
// console.log(myWatch);
// modem 
const myModem = new modem('GP', 3000, '64bg');
console.log(myModem);
