let array = [
    {
        name : 'Anrew',
        lastName : 'Mead',
        age : 27
    },
    {
        name : 'Brad',
        lastName : 'Traversy',
        age : 37
    },
    {
        name : 'Salar',
        lastName : 'Kamangar',
        age : 40
    },
    {
        name : 'Omid',
        lastName : 'kordestani',
        age : 57
    },
    {
        name : 'Arash',
        lastName : 'Ferdosi',
        age : 30
    },
    {
        name : 'Daraa',
        lastName : 'Khousroshahi',
        age : 20
    },
]

let loopArray = function (myFunction){
    array.forEach(function(item , index) {
        myFunction(item);
    })
}

loopArray(function(data) {
    if(data.age < 30){
        console.log(`${data.name} is bellow 30 because he is ${data.age}`);
    }
});

loopArray(function (data) {
    
})