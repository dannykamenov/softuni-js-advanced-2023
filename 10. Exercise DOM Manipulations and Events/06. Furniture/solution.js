function solve() {
  let [genBtn, buyBtn] = document.querySelectorAll('button');
  genBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);


  function generate(el) {

    let productInfo = JSON.parse(document.querySelector('textarea').value);
    productInfo.forEach(x => {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = x.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      let td2 = document.createElement('td');
      let p1 = document.createElement('p');
      p1.textContent = x.name;
      td2.appendChild(p1);
      tr.appendChild(td2);
      let td3 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = Number(x.price);
      td3.appendChild(p2);
      tr.appendChild(td3);
      let td4 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = Number(x.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);
      let td5 = document.createElement('td');
      let input = document.createElement('input');
      input.type = 'checkbox';
      td5.appendChild(input);
      tr.appendChild(td5);
      document.querySelector('tbody').appendChild(tr);
    });
  }


  function buy(el){
    let checkboxes = Array.from(document.querySelectorAll('tbody input')).filter(x => x.checked)
    let price = 0;
    let furnitureList = [];
    let decFactor = 0;
    checkboxes.forEach(x => {
      let parentEl = x.parentElement;
      let parentTr = parentEl.parentElement;
      let furName = parentTr.children[1].children[0].textContent;
      let furPrice = Number(parentTr.children[2].children[0].textContent);
      let furDec = Number(parentTr.children[3].children[0].textContent);
      furnitureList.push(furName);
      price += furPrice;
      decFactor += furDec;
    });
    let parentDiv = document.getElementById('exercise');
    let buyResult = parentDiv.children[4]; 
    buyResult.textContent += `Bought furniture: ${furnitureList.join(', ')}\n`;
    buyResult.textContent += `Total price: ${price.toFixed(2)}\n`;
    buyResult.textContent += `Average decoration factor: ${decFactor / checkboxes.length}`
  }
}