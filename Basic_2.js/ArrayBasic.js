// Array 


const myarr = [0,1,2,3,4,5,6,7];
console.log(myarr[1]);

//  Array MEthod

myarr.push(10);
myarr.push(20);
myarr.pop(10);


myarr.unshift(9);
myarr.unshift(10);

myarr.shift();


console.log(myarr);


// console.log(myarr.includes(3));
// console.log(myarr.indexof(3));


const newArr =   myarr.join();
console.log(myarr);
console.log(typeof newArr);





const myarr1 = myarr.slice(1,3);
console.log(myarr1);

console.log("B", myarr);

const myarr2 = myarr.splice(1,3);
console.log(myarr2);


