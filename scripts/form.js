const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];
const selectOption = document.querySelector("#productN");
productNames = (products)=> {
    products.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectOption.appendChild(option);
    });
}
function isReviewPage() {
    return document.title === "Review Page";
}
if (document.title === "Product Review Form") {productNames(products)};
// -------------------localstorage-------------------------------------
document.addEventListener('DOMContentLoaded', ()=> {
    const reviewDisplay = document.querySelector(".ReviewTotal");

    const getReviews = ()=> {
        let reviews = localStorage.getItem('Reviews');
        return reviews ? JSON.parse(reviews) : 0; // Return 0 if no reviews are found
    }

    let numReviews = getReviews();

    const setReviews = () => {
        localStorage.setItem('Reviews', JSON.stringify(numReviews));
    }

    const displayReviews = (reviews) =>{
        reviewDisplay.textContent = reviews;
    }

    if (isReviewPage()) {
        numReviews++;
        displayReviews(numReviews);
        setReviews();
    }
    
});
// Change border color of select option to green when valid
selectOption.addEventListener('change', () => {
  if (selectOption.value) {
    selectOption.style.borderLeft = '8px solid green';
  }
});