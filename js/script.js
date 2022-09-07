const principalInput = document.querySelector(".input");
const principalBtn = document.querySelector(".addBtn");
const container = document.querySelector(".container");

class Item {
    constructor(nuevaTarea) {
        this.nuevaTarea = nuevaTarea;
    }

    crearDiv() {
        let inputItem = document.createElement("input");
        inputItem.setAttribute("type","text");
        inputItem.disabled = true;
        inputItem.classList.add("inputItem")
        inputItem.value = this.nuevaTarea;

        let item = document.createElement("div");
        item.classList.add("item");

        let editBtn = document.createElement("button");
        editBtn.innerHTML = "<i class='fa-solid fa-lock'></i>";
        editBtn.classList.add("editBtn");

        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        removeBtn.classList.add("removeBtn");

        item.appendChild(inputItem);
        item.appendChild(editBtn);
        item.appendChild(removeBtn);

        container.appendChild(item);

        editBtn.addEventListener("click",function () {
            if (inputItem.disabled == true) {
                inputItem.disabled = !inputItem.disabled;
                this.innerHTML = "<i class='fas fa-lock-open'></i>";
                this.classList.add("active")
            }
            else {
                inputItem.disabled = !inputItem.disabled;
                this.innerHTML = "<i class='fa-solid fa-lock'></i>";
                this.classList.remove("active")
            }
        });

        removeBtn.addEventListener("click",function() {
            item.remove(true)
        });
    };
};

function checkInput () {
    if (principalInput.value) {
        let newItem = new Item(principalInput.value);
        principalInput.value = '';
        return newItem.crearDiv();
    }
}

principalBtn.addEventListener("click",function () {
    return checkInput()
})

