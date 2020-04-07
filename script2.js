// document.querySelector() -> mengembalikan element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "35px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

// document.querySelectorAll() -> mengembalikan nodelist
const p = document.querySelectorAll("p");

// mengubah warna pada paragraf 3
p[2].style.color = "orange";
