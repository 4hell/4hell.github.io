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
})
let selectedComponents = {};

// Функция для добавления компонента в сборку
function addComponent(category, name, price) {
    selectedComponents[category] = { name, price };
    updateSummary();
    alert(`${name} добавлен в сборку!`);
}

// Функция для обновления итоговой стоимости
function updateSummary() {
    let totalPrice = 0;
    if (!summaryList) {
        console.error("Элемент #summary-list не найден!");
        return;
    }
    let summaryList = document.getElementById("summary-list");
    summaryList.innerHTML = "";

    for (let category in selectedComponents) {
        let component = selectedComponents[category];
        totalPrice += component.price;

        let listItem = document.createElement("li");
        listItem.textContent = `${category}: ${component.name} - ${component.price} ₽`;
        summaryList.appendChild(listItem);
    }
    
    

    document.getElementById("total-price").textContent = `Итоговая цена: ${totalPrice} ₽`;
}

// Добавляем обработчик событий для всех кнопок на странице
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".add-to-build");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let category = this.getAttribute("data-category");
            let name = this.getAttribute("data-name");
            let price = parseInt(this.getAttribute("data-price"));
            addComponent(category, name, price);
        });
    });
});

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
            const name = this.dataset.name;
            const price = parseInt(this.dataset.price, 10);

            build.push({ name, price });
            updateBuild();
        });
    });

    document.getElementById("clear-build").addEventListener("click", function () {
        build = [];
        updateBuild();
    });
});
