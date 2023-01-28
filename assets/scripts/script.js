const acordeaoContent = document.querySelectorAll('[data-acordeao]');

acordeaoContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
        item.classList.toggle("open");
        let descripition = item.querySelector(".descricao__acordeao");
        if(item.classList.contains("open")) {
            descripition.style.height = `${descripition.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        } else {
            descripition.style.height = "0px"; 
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index);
    });

});

function removeOpen(index1) {
    acordeaoContent.forEach((item2, index2) => {
        if(index1 != index2) {
            item2.classList.remove("open");
            let des = item2.querySelector(".descricao__acordeao");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }
    });
}

