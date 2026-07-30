const items = document.querySelectorAll(".item");

let current = 1;

function atualizar() {
    items.forEach(item => {
        item.className = "item";
    });

    const left = (current - 1 + items.length) % items.length;
    const right = (current + 1) % items.length;

    items[left].classList.add("left");
    items[current].classList.add("active");
    items[right].classList.add("right");
}

items.forEach((item, index) => {
    item.addEventListener("click", () => {
        current = index;
        atualizar();
    });
});

atualizar();