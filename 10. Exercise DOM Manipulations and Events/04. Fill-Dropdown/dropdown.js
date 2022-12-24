function addItem() {
    let text = document.getElementById('newItemText');
    let valueText = document.getElementById('newItemValue');
    let selectMenu = document.getElementById('menu');
    let newOption = document.createElement('option');
    newOption.value = valueText.value;
    newOption.textContent = text.value;
    selectMenu.appendChild(newOption);
    valueText.value = '';
    text.value = '';
}