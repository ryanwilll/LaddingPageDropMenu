const menuO = document.querySelector("#menu-o");
const menuC = document.querySelector("#menu-c");
const dropMenuMobile = document.querySelector("#dropsmenu-mobile");
const blurBackground = document.querySelector(".max-width");
const featureBtn = document.querySelector("#featurebtn");
const dropFeature = document.querySelector("#drop-feature");
const companyBtn = document.querySelector("#companybtn");
const dropCompany = document.querySelector("#drop-company");

const featuredown = document.querySelector(
  "#dropsmenu-mobile #featurebtn::after"
);
const companydown = document.querySelector(
  "#dropsmenu-mobile #companybtn::after"
);

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

featureBtn.addEventListener("click", (feature) => {
  dropFeature.style.display =
    dropFeature.style.display === "none" ? "block" : "none";
});

companyBtn.addEventListener("click", (company) => {
  dropCompany.style.display =
    dropCompany.style.display === "none" ? "block" : "none";
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

/* MENU MOBILE EXPANDIR/ENCOLHER*/
