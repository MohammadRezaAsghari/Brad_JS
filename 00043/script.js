function Person(name , dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        //1.time stamp now

        let nowTimeStamp = Date.now();
        
        //2,3 time stamp birthday , differenciate

        let diff = nowTimeStamp - this.birthday.getTime();
        console.log(diff);

        //4. differencetiate date
        let ageHistory = new Date(diff);
        console.log(ageHistory);

        //5. differenciate date age - 1970
        console.log(ageHistory.getFullYear() - 1970);
    }
}

const mohammad = new Person('mohammad' , '9-14-1994');
mohammad.calculateAge();

const getSum = new Function('x', 'y' , 'return x+y');
console.log(getSum(2,4));