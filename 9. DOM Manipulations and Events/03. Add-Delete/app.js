function addItem() {
  let input = document.getElementById("newItemText").value;
  let li = document.createElement("li");
  let list = document.getElementById("items");

  if (input.length === 0) return;

  let removed = document.createElement("a");
  let linkText = document.createTextNode("[Delete]");

  removed.appendChild(linkText);
  removed.href = "#";
  removed.addEventListener("click", deleteItem);
  li.textContent = input;

  li.appendChild(removed);
  list.appendChild(li);

  document.getElementById("newItemText").value = "";

  function deleteItem() {
    li.remove();
  }
}
