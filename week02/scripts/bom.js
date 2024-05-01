const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const deleteButton = document.createElement("button")

li.textContent = input.value;

deleteButton.textContent = "x";



// add chapter

button.addEventListener("click", function() {
    if (input.value.trim() !== ""){

        const chapter = input.value.trim()

        const li = document.createElement("li");
        const deleteButton = document.createElement("button")
        li.textContent = chapter;
        deleteButton.textContent = "x";
        li.append(deleteButton)
        list.appendChild(li)
        input.value = ""
        input.focus();
        deleteButton.addEventListener('click', function () {
            
            list.removeChild(li);
            input.value = "";
            input.focus();
            
        });
        
    }
    else {
        input.focus()
    }
});

