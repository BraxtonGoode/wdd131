const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")

const today = new Date();
const lastMod = document.lastModified;


currentyear.innerHTML = `${today.getFullYear()}`;

lastModified.innerHTML = `Last Modification: ${lastMod}`;
// ---------------------------------------------------------

const hamMenuButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav')

hamMenuButton.addEventListener('click', () => {
    navigation.classList.toggle('show')
    hamMenuButton.classList.toggle('show')
}
)