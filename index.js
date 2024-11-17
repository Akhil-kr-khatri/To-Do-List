let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
//adding items into the list
btn.addEventListener("click", function () {
    let text = inp.value;
    let newli = document.createElement("li");
    newli.innerHTML = text;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete")

    newli.appendChild(delbtn);
    ul.appendChild(newli);
})
//Deleting items from list
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listParent =event.target.parentElement;
        listParent.remove();
        console.log("Delete Button")
    }

})
