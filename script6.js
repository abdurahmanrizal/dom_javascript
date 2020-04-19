const tUbahWarna = document.getElementById("tUbahWarna");
// btn.addEventListener("click", function () {
//   //   document.body.style.backgroundColor = "lightblue";
//   document.body.classList.toggle("biru-muda");
// });

const tAcakWarna = document.createElement("button");
const teksTAcakWarna = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTAcakWarna);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
const kMerah = document.querySelectorAll(".kotak")[0];
const kHijau = document.querySelectorAll(".kotak")[1];
const kBiru = document.querySelectorAll(".kotak")[2];

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  //   kMerah.style.backgroundColor = "rgb(" + r + ",100,100)";
});
sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  //   kMerah.style.backgroundColor = "rgb(" + r + ",100,100)";
  //   kHijau.style.backgroundColor = "rgb(100," + g + ",100)";
});
sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  //   kBiru.style.backgroundColor = "rgb(100,100," + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255 + 1);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",255)";
});
