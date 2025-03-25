console.log("Файл script.js загружен");

document.addEventListener("DOMContentLoaded", function () {
    let build = [];
    let totalPrice = 0;

    function updateBuild() {
        const buildList = document.getElementById("build-list");
        const totalPriceElem = document.getElementById("total-price");
        buildList.innerHTML = "";
        totalPrice = 0;

        build.forEach(component => {
            const li = document.createElement("li");
            li.textContent = `${component.name} - ${component.price} руб.`;
            buildList.appendChild(li);
            totalPrice += component.price;
        });

        totalPriceElem.textContent = `Общая стоимость: ${totalPrice} руб.`;
    }

    document.querySelectorAll(".component").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseInt(this.getAttribute("data-price"), 10);

            if (!isNaN(price)) {
                build.push({ name, price });
                updateBuild();
            } else {
                console.error("Ошибка: неверная цена у", name);
            }
        });
    });

    document.getElementById("clear-build").addEventListener("click", function () {
        build = [];
        updateBuild();
    });
});
document.querySelector(".burger-menu").addEventListener("click", function() {
    document.querySelector(".mobile-menu").classList.toggle("show");
});
