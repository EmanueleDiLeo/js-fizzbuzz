for(let i=1; i<=100; i++){
  let check = true;

  if(i % 3 === 0 && i % 5 === 0){
    console.log("3 e 5 - i=", i, "FizzBuzz");
    check= false;
  }

  if(i % 3 === 0 && check){
    console.log("3 - i=", i, i % 3 === 0,"Fizz");
  }

  if(i % 5 === 0 && check){
    console.log("3 - i=", i, i % 5 === 0,"Buzz");
  }
  console.log("-------------------------------------");
}