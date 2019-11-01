let personProto = {
    calculateAge: function(dataOfBirth) {
        console.log(2019 - dataOfBirth);
    }
}

let Mark = Object.create(personProto , {
    name : {value : 'Mark'},
    lastName : {value : 'Zuckerburg'}
})
