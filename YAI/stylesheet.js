let t = document.getElementsById("triangle");
let randomSize1 = Math.random() * (500 - 50 + 1) + 50;
let randomSize2 = Math.random() * (500 - 50 + 1) + 50;
let randomSize3 = Math.random() * (500 - 50 + 1) + 50;

t.style.borderTop = randomSize1 + "px solid transparent";
t.style.borderLeft = randomSize2 + "px solid orange";
t.style.borderBottom = randomSize3 + "px solid transparent";
