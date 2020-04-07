// DOM Manipulation

// document.innerHTML
// const judul = document.getElementById("judul");
// judul.style.color = "orange";
// judul.innerHTML = "<em>Abdurahman</em>";

// document.style.<propertiCss>
// const p3 = document.querySelector(".p3");
// p3.style.color = "blue";

// document.setAttribute() => untuk memberikan attribut baru pada element HTML
// const a = document.querySelectorAll("section#a a")[0];
// a.setAttribute("name", "abdurahman");
// document.removeAttribute() => untuk menghapus attribut pada element HTML
// a.removeAttribute("href");
// document.getAttribute() => untuk mengambil teks pada attribute

// document.classList

// document.classList.add() => untuk menambahkan class pada element HTML

const p2 = document.querySelector(".p2");
// p2.classList.add("label");

// document.classList.remove() => untuk menghapus class pada element HTML

// p2.classList.remove("p2");

// document.classList.toggle()

// p2.classList.toggle("biru-muda");

// document.classList.item([index]) => untuk mengetahui string nama item pada class yang terdapat pada element HTML
// document.classList.contains()    => untuk mengetahui apakah class tersebut ada atau tidak di element HTML dengan mengembalikan TRUE / FALSE
// document.classList.replace(classBaru, classLama)     => untuk mengganti class yang lama menjadi class yang baru
