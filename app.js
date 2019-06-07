document.addEventListener("DOMContentLoaded", function () {
    const lisChange = document.querySelectorAll("li");
    lisChange.forEach(function (li) {
        li.addEventListener("mouseenter", function () {
            li.style.color = "#EB7676"
        });
        li.addEventListener("mouseleave", function () {
            li.style.color = "#140F83"
        })
    });

})


var image1 = document.getElementsByClassName('foto_parallax1');
new simpleParallax(image1, {
    orientation: "left",
});

var image2 = document.getElementsByClassName('foto_parallax');
new simpleParallax(image2, {
    delay: .9,
    transition: 'cubic-bezier(0,0,0,1)'
});