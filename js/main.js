// Vars 
let addBtn = document.querySelector(".app .addItem"),
    removeAllBtn = document.querySelector(".app .clearAll"),
    inputField = document.querySelector(".app .typeNote"),
    NoteField = document.querySelector(".app .items");
inputField.addEventListener("click", () => {
    let inputPH = inputField.getAttribute("placeholder");
    inputPH = "sadasdsd"
})
addBtn.addEventListener("click", () => {
    createNote();
    deleteNote();
    completedNotes();
});
///- Enter Key
document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        createNote();
        deleteNote();
        completedNotes();
    };
});
// Create Note
function createNote() {
    if (inputField.value == "") {
        addBtn.preventDefault;
    } else {
        //- Create Elements
        let item = document.createElement("div"),
            content = document.createElement("span"),
            removeBtn = document.createElement("button"),
            doneBtn = document.createElement("button"),
            doneMark = document.createTextNode("✓"),
            removeMark = document.createTextNode("X"),
            contentText = document.createTextNode(inputField.value);
        //- SetAtrribute To Element
        item.setAttribute("class", "item");
        content.setAttribute("class", "content");
        removeBtn.setAttribute("class", "remove");
        doneBtn.setAttribute("class", "done");
        //- appendChild to Elements
        content.appendChild(contentText);
        doneBtn.appendChild(doneMark);
        removeBtn.appendChild(removeMark);
        //- appendChild to Parent
        item.appendChild(content);
        item.appendChild(removeBtn);
        item.appendChild(doneBtn);
        //---
        NoteField.appendChild(item);
        //-- Clear inputField
        inputField.value = "";
        //-------
        //- ClearAll Items
        removeAllBtn.addEventListener("click", () => {
            item.remove();
        });
    };
};
//- Delete Note 
function deleteNote() {
    let removebtns = document.querySelectorAll(".items .item .remove");
    removebtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.path[1].remove()
        });
    });
};
//- Check notes 
function completedNotes() {
    let donebtns = document.querySelectorAll(".items .item .done");
    donebtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.path[1].classList.add("completed");
        });
    });
};