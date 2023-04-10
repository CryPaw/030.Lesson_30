function Person (name, age) {
    this.name = name;
    this.age = age;
    this.personInfo = function () {
        console.group (`${this.name} info:`);
        console.log ("Your name is: " + this.name);
        console.log ("Your age is: " + this.age);
        console.groupEnd ();
    };
}; 

function Car (brand,model,year,licenseplate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licenseplate = licenseplate;
    this.getCarInfo = function () {
        console.group (`${this.brand + ' ' + this.model} info:`);
        console.log ("Model of your car: " + this.brand + " " + this.model);
        console.log ("licenseplate of your car: " + this.licenseplate);
        console.log ("Year of issue: " + this.year);
        console.groupEnd();
    };
    this.ownerCar = function (person) {
        console.log(person.name + " is the owner of the "+ this.brand + " " + this.model + " " + this.year);
    };
};


const owner = new Person ("Nick", 17);
const owner2 = new Person ("Dan", 19);
const owner3 = new Person ("Vasya", 16);
const owner4 = new Person ("Sergey", 36);

const myCar = new Car( "BMW", "i8", 2022, "AY 2323 OG" );
const myCar2 = new Car( "Audi", "r8", 2007, "DP 3033 PD" );
const myCar3 = new Car( "Chevrolet", "Viper", 2007, "CH 1133 VI" );
const myCar4 = new Car( "Ferrari", "Daytona", 2022, "FD 7777 GU" );

owner.personInfo();
if (owner.age > 18) {
    myCar.getCarInfo();
    myCar.ownerCar(owner);
    } else {
        console.log("Вам ще не положено автівку!")
    }

    owner2.personInfo();
    if (owner2.age > 18) {
        myCar2.getCarInfo();
        myCar2.ownerCar(owner2);
        } else {
            console.log("Вам ще не положено автівку!")
        }

        owner3.personInfo();
    if (owner3.age > 18) {
        myCar3.getCarInfo();
        myCar3.ownerCar(owner3);
        } else {
            console.log("Вам ще не положено автівку!")
        }

        owner4.personInfo();
        if (owner4.age > 18) {
            myCar4.getCarInfo();
            myCar4.ownerCar(owner4);
            } else {
                console.log("Вам ще не положено автівку!")
            }