const bigBox = document.querySelector(".big-box");

for(let i=1; i<=100; i++){
  const box = document.createElement("div");
  box.classList.add("box");

  if(!(i % 3) && !(i % 5)){
    box.classList.add("fizz-buzz");
    box.append("fizzbuzz");
    check= false;
  }

  else if(!(i % 3)){
    box.classList.add("fizz");
    box.append("fizz");
  }

  else if(!(i % 5)){
    box.classList.add("buzz");
    box.append("buzz");
  }

  else{
    box.append(i);
  }

  bigBox.append(box);
}