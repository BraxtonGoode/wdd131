// -------------------------------------------------------
// footer current year and last modified
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified")

const today = new Date();
const lastMod = document.lastModified;


currentyear.innerHTML = `${today.getFullYear()}`;

lastModified.innerHTML = `Last Modification: ${lastMod}`;
// ----------------------------------------------------

const temp = 83;
const windSpeed = 13

const WindChillFactor = (temp,wind) => { 
    const WindChillFactor = 35.74 + 0.6215 * temp - 35.75 * wind **0.16 + 0.4275 * temp * wind ** 0.16
    const combinedChillFactor = `${WindChillFactor.toFixed(2)} F`
    return combinedChillFactor
}

document.querySelector("#windChill").innerHTML = WindChillFactor(temp,windSpeed)