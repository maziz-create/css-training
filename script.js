// links selection
const goToHomepage = document.querySelector('.goToHomepage');
const goToProducts = document.querySelector('.goToProducts');
const goToAboutUs = document.querySelector('.goToAboutUs');
// sections selection
const homepage = document.getElementById("homepage");
const products = document.getElementById("products");
const about_us = document.getElementById("about-us");

goToHomepage.addEventListener('click', function(){
    homepage.style.display = "block";
    products.style.display = "none";
    about_us.style.display = "none";
});

goToProducts.addEventListener('click', function(){
    homepage.style.display = "none";
    products.style.display = "block";
    about_us.style.display = "none";
});

goToAboutUs.addEventListener('click', function(){
    homepage.style.display = "none";
    products.style.display = "none";
    about_us.style.display = "block";
});