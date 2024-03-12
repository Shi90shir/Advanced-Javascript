/*

If const , let or var is any Kind of Number without 0 Than The Condition Will Show Us True If the Condition is With 0 Than The Condition Show Us False


const age = 0;

if(age){
    console.log("Condition is true");
}

else{
    console.log("Condition is false");
}
*/

// const name = "0";
let name = 0;
console.log(name);

if(name || name == 0){
    console.log("Condition is true");
}

else{
    console.log("Condition is false");
}