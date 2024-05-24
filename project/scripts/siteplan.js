const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")

const today = new Date();
const lastMod = document.lastModified;


currentyear.innerHTML = `${today.getFullYear()}`;

lastModified.innerHTML = `Last Modification: ${lastMod}`;