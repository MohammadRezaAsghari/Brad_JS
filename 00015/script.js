let age = 100;
const name = 'Ross';

// if(age <=10){
//     console.log(`${name} is a kid`);
// }
// else if(age >=11 && age<=19){
//     console.log(`${name} is a teenager`);
// }
// else if(age>=20 && age<30){
//     console.log(`${name} is in his/her 20ns`);
// }
// else if(age>=30){
//     console.log(`${name} is an adult`);
// }

if(age > 65 || age <10){
    console.log(`sorry dear ${name} you can not enter the race`);
}
else{
    console.log(`Welcome to the race ${name}`);
}