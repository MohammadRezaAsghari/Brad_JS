class Person{
    constructor(fName , lName , dob){
        this.fName = fName;
        this.lName = lName;
        this.dob = new Date(dob);
        this.basicAgeCalc = function(){
            console.log(2019 - this.dob.getFullYear());
        }
    }
    greeting(){
        return `Hi ${this.fName} ${this.lName}`
    }
    calculateAge(){
        let timeStamp = Date.now();
        let BirthTimeStamp = this.dob.getTime();
        let diff = timeStamp - BirthTimeStamp;
        let ageDate = new Date(diff);
        console.log(ageDate.getFullYear() - 1970);
    }
}

let john = new Person('john' , 'Mead' , '8-1-1994');

console.log(john.basicAgeCalc());
