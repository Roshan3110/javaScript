// Date


let Mydate =  new Date();
console.log(Mydate.toString());
console.log(Mydate.toDateString());
console.log(Mydate.toLocaleDateString());
console.log(typeof Mydate);



// let mycreateDate = new Date(2026, 9 ,15);
let mycreateDate = new Date("2027-10-15");
// let mycreateDate = new Date(2026, 9 ,15,1,3);

// console.log(mycreateDate.toDateString());
console.log(mycreateDate.toLocaleString());




let  myTimeStap  = Date.now();
console.log(myTimeStap);
console.log(mycreateDate.getTime());
console.log(Math.floor(Date.now() / 1000));

