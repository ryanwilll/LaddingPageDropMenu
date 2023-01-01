const menuO = document.querySelector("#menu-o");
const menuC = document.querySelector("#menu-c");
const dropMenuMobile = document.querySelector("#dropsmenu-mobile");
const blurBackground = document.querySelector(".max-width");
const featureBtn = document.querySelector("#featurebtn");
const dropFeature = document.querySelector("#drop-feature");
const companyBtn = document.querySelector("#companybtn");
const dropCompany = document.querySelector("#drop-company");

menuO.addEventListener("click", (menuO) => {
  openMenuMobile();
});

menuC.addEventListener("click", (menuC) => {
  closeMenuMobile();
});

/* Botões expandir menu - mobile*/

featureBtn.addEventListener("click", (feature) => {
  console.log(feature);
  expandirMenuFeature();
});

companyBtn.addEventListener("click", (company) => {
  expandirMenuCompany();
  console.log(company);
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
function expandirMenuFeature() {
  document.getElementById("drop-feature").style.display = "block";
}

function expandirMenuCompany() {
  document.getElementById("drop-company").style.display = "block";
}


function recolherMenuFeature(){
  document.getElementById
}