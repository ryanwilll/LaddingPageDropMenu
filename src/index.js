/* 
-
-
-
DECLARAÇÕES
-
-
-
*/
// Mobile
const menuO = document.querySelector("#menu-o");
const menuC = document.querySelector("#menu-c");
const dropMenuMobile = document.querySelector("#dropsmenu-mobile");
const btnActiveFeature = document.querySelector("#btn-active-feature");
const dropFeature = document.querySelector("#drop-feature");
const btnActiveCompany = document.querySelector("#btn-active-company");
const dropCompany = document.querySelector("#drop-company");

// Desktop
const featureDesktop = document.querySelector("#featurebtn");
const featureDesktopContent = document.querySelector("#drop-feature-desktop");
const companyDesktop = document.querySelector("#companybtn");
const companyDesktopContent = document.querySelector("#drop-company-desktop");

/* 
-
-
EVENTOS
-
-


/* 
-
-
FUNÇÕES
-
-
*/
function openMenuMobile() {
  document.getElementById("dropsmenu-mobile").style.opacity = 1;
  document.getElementById("dropsmenu-mobile").style.visibility = "visible";
  document.getElementById("max-width").style.opacity = 1;
  document.getElementById("max-width").style.visibility = "visible";
}

function closeMenuMobile() {
  document.getElementById("dropsmenu-mobile").style.opacity = 0;
  document.getElementById("dropsmenu-mobile").style.visibility = "hidden";
  document.getElementById("max-width").style.opacity = 0;
  document.getElementById("max-width").style.visibility = "hidden";

  setTimeout(() => {
    document.getElementById("drop-company").style.display = "none";
    document.getElementById("drop-feature").style.display = "none";
    console.log("Delay de 500ms");
  }, "500");
}

function openOrCloseFeature() {
  if (dropFeature.style.display === "block") {
    document.getElementById("drop-feature").style.display = "none";
  } else {
    document.getElementById("drop-feature").style.display = "block";
  }
}

function openOrCloseCompany() {
  if (dropCompany.style.display === "block") {
    document.getElementById("drop-company").style.display = "none";
  } else {
    document.getElementById("drop-company").style.display = "block";
  }
}

/* 

FUNCTION DESK

*/

function openFeatureDesktop() {
  featureDesktopContent.style.opacity = 1;
  featureDesktopContent.style.visibility = "visible";
  featureDesktop.style.color = "var(--AlmostBlack)";
  document.getElementById("arrow-down-desk").src = "./images/icon-arrow-up.svg";
}

function closeFeatureDesktop() {
  featureDesktopContent.style.opacity = 0;
  featureDesktopContent.style.visibility = "hidden";
  featureDesktop.style.color = "var(--MediumGray)";
  document.getElementById("arrow-down-desk").src =
    "./images/icon-arrow-down.svg";
}

function openCompanyDesktop() {
  companyDesktopContent.style.opacity = 1;
  companyDesktopContent.style.visibility = "visible";
  companyDesktop.style.color = "var(--AlmostBlack)";
  document.getElementById("arrow-down-desk-company").src =
    "./images/icon-arrow-up.svg";
}

function closeCompanyDesktop() {
  companyDesktopContent.style.opacity = 0;
  companyDesktopContent.style.visibility = "hidden";
  companyDesktop.style.color = "var(--MediumGray)";
  document.getElementById("arrow-down-desk-company").src =
    "./images/icon-arrow-down.svg";
}
