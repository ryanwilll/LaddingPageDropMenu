const menuO = document.querySelector("#menu-o");
const menuC = document.querySelector("#menu-c");
const dropMenuMobile = document.querySelector("#dropsmenu-mobile");
const blurBackground = document.querySelector(".max-width");
const btnActiveFeature = document.querySelector("#btn-active-feature");
const dropFeature = document.querySelector("#drop-feature");
const btnActiveCompany = document.querySelector("#btn-active-company");
const dropCompany = document.querySelector("#drop-company");
const arrowDownFeature = document.querySelector("#arrow-down-feature");

/* 
-
-
EVENTOS
-
-
*/
menuO.addEventListener("click", (menuO) => {
  openMenuMobile();
});

menuC.addEventListener("click", (menuC) => {
  closeMenuMobile();
  dropFeature.style.display =
    dropCompany.style.display === "block" ? "none" : "none";
  dropCompany.style.display =
    dropCompany.style.display === "block" ? "none" : "none";
});

/* Botões expandir menu - mobile*/

btnActiveFeature.addEventListener("click", (feature) => {
  dropFeature.style.display =
    dropFeature.style.display === "block" ? "none" : "block";

  if (dropFeature.style.display === "none") {
    document.getElementById("arrow-down-feature").src =
      "./images/icon-arrow-down.svg";
  } else {
    document.getElementById("arrow-down-feature").src =
      "./images/icon-arrow-up.svg";
  }
});

btnActiveCompany.addEventListener("click", (company) => {
  dropCompany.style.display =
    dropCompany.style.display === "block" ? "none" : "block";
  if (dropCompany.style.display === "none") {
    document.getElementById("arrow-down-company").src =
      "./images/icon-arrow-down.svg";
  } else {
    document.getElementById("arrow-down-company").src =
      "./images/icon-arrow-up.svg";
  }
});

/* Funções*/
function openMenuMobile() {
  document.getElementById("dropsmenu-mobile").style.display = "block";
  document.getElementById("max-width").style.display = "block";
}

function closeMenuMobile() {
  document.getElementById("dropsmenu-mobile").style.display = "none";
  document.getElementById("max-width").style.display = "none";
}
