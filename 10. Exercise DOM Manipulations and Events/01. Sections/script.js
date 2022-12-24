function create(words) {
   let mainDiv = document.getElementById('content');
   // for each word create a div with a p in it containing the word
   for(let word of words) {
      let p = document.createElement('p');
      p.textContent = word;
      // each p is hidden
      p.style.display = 'none';
      let div = document.createElement('div');
      div.appendChild(p);
      // add event listener to each div to display the hidden p upon clicking
      div.addEventListener('click', onClick);
      // append all divs to the element with id='content'
      mainDiv.appendChild(div);
   }

   function onClick(ev){
      ev.target.children[0].style.display = '';
   }
}