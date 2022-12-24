function solve() {
   document.addEventListener('click', onClick);
   let output = document.getElementsByClassName('shopping-cart')[0].children[4];
   let cartItems = [];
   let cartPrice = 0;
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkMeOut);


   function onClick(ev) {
      const buttonDiv = ev.target.parentNode;
      const productDiv = buttonDiv.parentNode;
      let productName = productDiv.children[1].children[0].textContent;
      let productPrice = Number(productDiv.children[3].textContent);
      output.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      if(!cartItems.includes(productName)){
         cartItems.push(productName);
      }
       // Do not add if repeating product.
      cartPrice += Number(productPrice.toFixed(2));
   }

   function checkMeOut(ev) {
      document.removeEventListener('click', onClick);
      output.textContent += `You bought ${cartItems.join(', ')} for ${cartPrice.toFixed(2)}.`
      document.getElementsByClassName('checkout')[0].removeEventListener('click', checkMeOut);
   }
}