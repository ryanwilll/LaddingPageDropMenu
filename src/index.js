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
const arrowDownDesktop = document.querySelector("#arrow-down-desk");
const companyDesktop = document.querySelector("#companybtn");
const companyDesktopContent = document.querySelector("#drop-company-desktop");

/* 
-
-
EVENTOS
-
-
*/
featureDesktop.addEventListener("mouseenter", (eventofeaturedesktop) => {
  if (companyDesktopContent.style.display === "block") {
    companyDesktopContent.style.display = "none";
    companyDesktop.style.color = "var(--MediumGray)";
    document.getElementById("arrow-down-desk-company").src =
      "./images/icon-arrow-down.svg";
  }
  featureDesktopContent.style.display = "block";
  featureDesktop.style.color = "var(--AlmostBlack)";
  document.getElementById("arrow-down-desk").src = "./images/icon-arrow-up.svg";
});

featureDesktopContent.addEventListener("mouseleave", (eventofeaturedesktop) => {
  featureDesktopContent.style.display = "none";
  featureDesktop.style.color = "var(--MediumGray)";
  document.getElementById("arrow-down-desk").src =
    "./images/icon-arrow-down.svg";
});

/*
 */
companyDesktop.addEventListener("mouseenter", (eventofeaturedesktop) => {
  if (featureDesktopContent.style.display === "block") {
    featureDesktopContent.style.display = "none";
    featureDesktop.style.color = "var(--MediumGray)";
    document.getElementById("arrow-down-desk").src =
      "./images/icon-arrow-down.svg";
  }
  companyDesktopContent.style.display = "block";
  companyDesktop.style.color = "var(--AlmostBlack)";

  document.getElementById("arrow-down-desk-company").src =
    "./images/icon-arrow-up.svg";
});

companyDesktopContent.addEventListener("mouseleave", (eventofeaturedesktop) => {
  companyDesktopContent.style.display = "none";
  companyDesktop.style.color = "var(--MediumGray)";
  document.getElementById("arrow-down-desk-company").src =
    "./images/icon-arrow-down.svg";
});

menuO.addEventListener("click", (menuO) => {
  openMenuMobile();
  closeFeatureMobileMobile();
  closeCompanyMobile();
});

menuC.addEventListener("click", (menuC) => {
  closeMenuMobile();
  closeCompanyMobile();
  closeCompanyMobile();
});

btnActiveFeature.addEventListener("click", (feature) => {
  if (dropFeature.style.display === "none") {
    openFeature();
  } else {
    closeCompanyMobile();
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
    closeCompanyMobile();
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

function closeFeatureMobileMobile() {
  document.getElementById("drop-feature").style.display = "none";
}

function openCompany() {
  document.getElementById("drop-company").style.display = "block";
}
function closeCompanyMobile() {
  document.getElementById("drop-company").style.display = "none";
}
