let slideIndex = 1;
showDivs(slideIndex);

function switchSlide(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let x = document.getElementById('carousel').getElementsByTagName("img");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}