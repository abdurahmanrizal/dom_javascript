// dom selection
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// dom traversal
const close = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");
close.forEach(function (el) {
  el.addEventListener("click", function (event) {
    event.target.parentElement.style.display = "none";
  });
});
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function () {
//     card[i].style.display = "none";
//   });
// }
// const close = document.querySelector(".close");
// close.addEventListener("click", function (e) {
//   console.log(
//     e.target.previousElementSibling.previousElementSibling
//       .previousElementSibling
//   );
// });
