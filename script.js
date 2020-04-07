// untuk menyeleksi id pada js : getElementById() -> mengembalikan element
// ex:
const judul = document.getElementById("judul");
// mengganti warna pada id judul menggunakan javascript
judul.style.color = "red";
// mengganti warna background pada id judul menggunakan javascript
judul.style.backgroundColor = "grey";
// style digunakan untuk memberikan efek css pada element HTML
// mengganti teks pada id judul yang semula hello world menjadi Abdurahman
judul.innerHTML = "Abdurahman";

// document.getElementsByTagName() -> mengembalikan HTMLCollection
// ex:
const p = document.getElementsByTagName("p");
// untuk memberikan efek css tidak sama dengan memberikan efek css pada id
// karena document.getElementsByTagName() mengembalikan HTMLCollection berupa array
// jadi menggunakannya harus menggunakan index
// contoh hanya satu yang menggunakan efek warna biru tag HTML p
// p[0].style.color = "blue";
// gimana jika banyak? Terdapat 2 solusi nih kawan
// cara 1
// p[0].style.color = "blue";
// p[1].style.color = "blue";
// p[2].style.color = "blue";
// p[3].style.color = "blue";
// cara 2 lebih efektif dengan menggunakan pengulangan karena warna yang dihasilkan inginnya sama semua
for (let i = 0; i < p.length; i++) {
  p[i].style.color = "lightblue";
}
// jika tidak ingin mengubah semua tag HTML p berwarna biru muda bisa menggunakan cara yang pertama kawan

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "40px";

// document.getElementsByClassName() -> mengembalikan HTMLCollection
const p1 = document.getElementsByClassName("p1")[0];
p1.style.color = "red";
