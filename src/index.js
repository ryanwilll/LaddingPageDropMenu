/* 
-
-
DECLARAÇÕES
-
-
*/
const menuO = document.querySelector("#menu-o");
const menuC = document.querySelector("#menu-c");
const dropMenuMobile = document.querySelector("#dropsmenu-mobile");
const btnActiveFeature = document.querySelector("#btn-active-feature");
const dropFeature = document.querySelector("#drop-feature");
const btnActiveCompany = document.querySelector("#btn-active-company");
const dropCompany = document.querySelector("#drop-company");

/* 
-
-
EVENTOS
-
-
*/
menuO.addEventListener("click", (menuO) => {
  openMenuMobile();
  closeFeature();
  closeCompany();
});

menuC.addEventListener("click", (menuC) => {
  closeMenuMobile();
  closeCompany();
  closeFeature();
});

btnActiveFeature.addEventListener("click", (feature) => {
  if (dropFeature.style.display === "none") {
    openFeature();
  } else {
    closeFeature();
  }
  if (dropFeature.style.display === "none") {
    document.getElementById("arrow-down-feature").src =
      "./images/icon-arrow-down.svg";
  } else {
    document.getElementById("arrow-down-feature").src =
      "./images/icon-arrow-up.svg";
  }
});

btnActiveCompany.addEventListener("click", (company) => {
  if (dropCompany.style.display === "none") {
    openCompany();
  } else {
    closeCompany();
  }

  if (dropCompany.style.display === "none") {
    document.getElementById("arrow-down-company").src =
      "./images/icon-arrow-down.svg";
  } else {
    document.getElementById("arrow-down-company").src =
      "./images/icon-arrow-up.svg";
  }
});

/* 
-
-
FUNÇÕES
-
-
*/
function openMenuMobile() {
  document.getElementById("dropsmenu-mobile").style.display = "block";
  document.getElementById("max-width").style.display = "block";
}

function closeMenuMobile() {
  document.getElementById("dropsmenu-mobile").style.display = "none";
  document.getElementById("max-width").style.display = "none";
}

function openFeature() {
  document.getElementById("drop-feature").style.display = "block";
}

function closeFeature() {
  document.getElementById("drop-feature").style.display = "none";
}

function openCompany() {
  document.getElementById("drop-company").style.display = "block";
}
function closeCompany() {
  document.getElementById("drop-company").style.display = "none";
}
