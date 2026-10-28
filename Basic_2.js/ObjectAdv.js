const tinderUser  = new Object();

const tinder = {}

tinder.id = "325637Roshan"
tinder.name = " Roshan"
tinder.isLogged = false


console.log(tinder);



const reguralUser = {
    email : "Roshan@gmail.com",
    fullName :{
        username : {
            firstname : "Roshan",
            lastname :"Waghmare"
        }
    }
}

console.log(reguralUser.fullName.username.firstname)


const obj1 = {1  : "a" , 2 : "b"};
const obj2 = {3  : "a" , 4 : "b"};


const obj3 = {obj1,obj2};
console.log(obj3);

// const obj4 = {...obj1, ...obj2};
// console.log(obj4);

const obj4 = Object.assign({},obj1,obj2);
console.log(obj4);

// impontant

console.log(Object.keys(tinder));
console.log(Object.values(tinder));


console.log(tinder.hasOwnProperty('isLoggedIn'));

