// DOM MANIPULATION

// buat elemen baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");
// simpan tulisan ke dalam paragraf (tag p)
pBaru.appendChild(teksPBaru);

// simpan pBaru kedalam section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// node.insertBefore(elemenBaru, elemenSebelum)
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

// menghapus element child
// const link = document.getElementsByTagName("a")[0];
const link = sectionA.querySelectorAll("a")[0];
sectionA.removeChild(link);

// mengganti element html
const pBaru4 = document.createElement("h1");
const teksPBaru4 = document.createTextNode("Judul Baru");

pBaru4.appendChild(teksPBaru4);

const sectionB = document.getElementById("b");
const pLama4 = sectionB.querySelectorAll("p")[0];

sectionB.replaceChild(pBaru4, pLama4);
