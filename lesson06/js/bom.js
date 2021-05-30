const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {

    if (input.value != "") {

        let userText = input.value;

        const newItem = document.createElement("li");
        const deleteButton = document.createElement("button");

        newItem.textContent = userText;
        deleteButton.textContent = "❌";
        
        newItem.appendChild(deleteButton);

        list.appendChild(newItem);

        deleteButton.addEventListener("click",
            () => {
                list.removeChild(newItem);
                console.log("DELETE 1");
            }
        );

        input.value = "";
        input.focus();
    }
});

function test(newItemasdf) {
    list.removeChild(newItemasdf);
    console.log("DELETE 3");
}