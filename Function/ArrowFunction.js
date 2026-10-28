// This Keyword :- Current code exchuted;


const user = {
    username :"Roshan",
    Price : 99,

    welcomes : function(){
        console.log(`${this.username},welcome To website`);
        console.log(this);
    }
}

// user.username
// username = "neha"
// user.welcomes();
// user.username;
//       console.log(this);






      function Chai(){
        console.log(this);
      }

    //   Chai();

    const One =  () =>{
        let username = "Neha";
        console.log(this.username);
    }

    One();


    const Add  = (num1 , num2) =>{
        return num1 +  num2;
    }

    console.log(Add(20,40));

    const newAdd = (num1,num2) => num1 +  num2;
    console.log(newAdd(30,20));

    const Str = () => ({username : "Yashswi"});
    console.log(Str())









    // Immediately  Invoked Function Expression (IIFE)


// (function NewChai() {
//     console.log(`DB function`);
// })();

((name) => {
    console.log(`Name is ${name}`)
})("Rosh");