const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");
const addBtn = document.getElementById("add-btn");

// adding list items into list

addBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    window.alert("You must write something first");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    //creating delete button/icon
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  //remove text from input box
  inputBox.value = "";
  saveDate();
});

//adding toggling in list item

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// trigger add on Enter key
inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addBtn.click();
  }
});

//saving data to local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
