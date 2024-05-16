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
// ------------------------------------------------------------
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Gilbert Arizona",
        location: "Gilbert, Arizona",
        dedicated: "2014, March, 2",
        area: 85326,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/1280x800/gilbert-arizona-temple-evening-1172169-wallpaper.jpg"
    },
    {
        templeName: "Phoenix Arizona",
        location: "Phoenix, Arizona",
        dedicated: "2014, November, 16",
        area: 64870,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/phoenix-arizona/1280x800/phoenix-arizona-temple-1284079-wallpaper.jpg",
    },
    {
        templeName: "Tuscon Arizona",
        location: "Tucson, Arizona",
        dedicated: "2017, August, 13",
        area: 38216,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tucson-arizona/1280x800/tucson-arizona-temple-exterior-1929273-wallpaper.jpg"
    }
  ];




function templeCard(TempleList) {
    
    const container = document.querySelector(".main-container")
    container.innerHTML = "";
    TempleList.forEach(temple => {
        const templeCard = `<div class="temple-card">
        <h2> ${temple.templeName}</h2>
        <ul>
            <li><strong>Location: </strong>${temple.location}</li>
            <li><strong>Dedicated: </strong>${temple.dedicated}</li>
            <li><strong>Size: </strong>${temple.area} sq ft</li>
        </ul>
        <figure>
            <img src="${temple.imageUrl}" alt="${temple.templeName} loading="lazy" width="300" height="200">
        </figure>
        </div>`

        container.innerHTML += templeCard
        
    });

}

templeCard(temples);


function renameTitlePage(newTitle){
  const h2Eement = document.querySelector("#titlepage")
  h2Eement.textContent = ""
  h2Eement.textContent = `${newTitle}`
}



// -------------------------------------------------------------
const oldTempleLink = document.querySelector("#old");

oldTempleLink.addEventListener("click", ()=>{
  renameTitlePage("Old Temples")
  templeCard(temples.filter(temple => {
    const dedicatedyear = parseInt(temple.dedicated.split(",")[0])

    return dedicatedyear < 1900;
  }))
})
// --------------------------------------------------------------------
const newTempleLink = document.querySelector("#new");

newTempleLink.addEventListener("click", () => {
  renameTitlePage("New Temples")
  templeCard(temples.filter(temple => {
    const dedicatedyear = parseInt(temple.dedicated.split(",")[0])
    return dedicatedyear >1900;
  }))
})
// -----------------------------------------------------------------
const largeTempleLink = document.querySelector("#large");

largeTempleLink.addEventListener("click", () => {
  renameTitlePage("Large Temples")
  templeCard(temples.filter(temple => {
    const largearea = temple.area

    return largearea > 90000

  }))
})
// -----------------------------------------------------------------------
const smallTempleLink = document.querySelector("#small");

smallTempleLink.addEventListener("click", () => {
  renameTitlePage("Small Temples")
  templeCard(temples.filter(temple => {
    const smallarea = temple.area

    return smallarea < 90000

  }))
})
// ---------------------------------------------------------------------
const homeTempleLink = document.querySelector("#home");

homeTempleLink.addEventListener("click", () => {
  renameTitlePage("Temples")
  templeCard(temples)
})
