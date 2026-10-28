// singleton 
// Object.create();



//Object literals

const  MySym = Symbol("key1");


const jsUser = {

    name : "Roshan",
   [MySym]:"myKey1",
    age : 20,
    email : "RoshanW@gmail.com",
    isLoggedIn : false,
    lastLoginDays :["Monday","Sunday"]
    
}

console.log(jsUser.email);
console.log(jsUser["age"]);
console.log(jsUser[MySym]);
console.log(jsUser);




jsUser.greeting  = function(){
    console.log("Hello  Roshan How are You!");
}

console.log(jsUser.greeting());

jsUser.greetingTwo =  function(){
    console.log(`Hello  js user , ${this.name} , ${this.age}`)
}

console.log(jsUser.greetingTwo());