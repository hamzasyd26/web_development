let inputbx = document.querySelector("#inputbx");
let list = document.querySelector("#list");

inputbx.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    additem(this.value);
    this.value = "";
  }
});
let additem = (inputbx) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${inputbx}<i>`;
  list.appendChild(listItem);

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });
};
