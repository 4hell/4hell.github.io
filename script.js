document.addEventListener("DOMContentLoaded", function() {
    console.log("Сайт загружен!");
});
document.querySelectorAll('.component').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.backgroundColor = "#ddd";
    });
    link.addEventListener('mouseout', function() {
        this.style.backgroundColor = "white";
    });
});
