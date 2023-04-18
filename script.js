class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    get info() {
      console.log(`PERSON: ${this.name} ${this.age}`)
    }
  }
  
  class Car {
    constructor(brand, model, year, licenseplate) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.licenseplate = licenseplate;
    }
  
    owner(owner) {
      if (owner.age < 18) {
        console.log('ACCESS DENIED: You are too young')
      } else {
        this.ownerName = owner;
      }
    }
  
    get carInfo() {
      console.log(`CAR: ${this.brand} ${this.model} ${this.year} ${this.licenseplate}`);
      this.ownerName ? this.ownerName.info : console.log(`У ${this.brand}-${this.model} власника немає`);
    }
  }
  
  const nick = new Person('Nick', 23);
  const dan = new Person('Dan', 12);
  const sergey = new Person('Sergey', 36);
  nick.info;
  dan.info;
  const bmw = new Car('Bmw', 'i8', 2022, 'Y2323OG');
  const audi = new Car('Audi', 'r8', 2007, 'P3033PD');
  const chevrolet = new Car('Chevrolet', 'Viper', 2019, 'H1133VI');
  
  bmw.owner(nick);
  audi.owner(dan);
  chevrolet.owner(sergey);
  
  bmw.carInfo;
  audi.carInfo;
  chevrolet.carInfo;
