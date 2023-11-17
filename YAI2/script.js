setInterval(function(){
    let t = document.getElementById("triangle");
let randomSize1 = Math.random() * (500 - 50 + 1) + 50;
let randomSize2 = Math.random() * (500 - 50 + 1) + 50;
let randomSize3 = Math.random() * (500 - 50 + 1) + 50;

// TRIANGLE SIZE
t.style.borderTop = randomSize1 + "px solid transparent";
t.style.borderLeft = randomSize2 + "px solid orange";
t.style.borderBottom = randomSize3 + "px solid transparent";

// TRIANGLE Height
let randomHeight1 = Math.random() * (500 - 50 + 1) + 50;
let randomHeight2 = Math.random() * (400 - 50 + 1) + 50;
let randomHeight3 = Math.random() * (400 - 50 + 1) + 50;

t.style.borderTop = randomHeight1 + "px solid transparent";
    t.style.top = -randomHeight1 + "px solid orange";
    t.style.top = randomHeight1 + "px solid transparent"
    t.style.transform = "rotate(" +  randomRotate1 + "deg)";
},1000);

  
     
  