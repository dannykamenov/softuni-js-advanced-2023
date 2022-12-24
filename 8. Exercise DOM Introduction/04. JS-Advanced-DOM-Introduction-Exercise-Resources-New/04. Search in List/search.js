function search() {
   let townList = document.querySelectorAll('ul#towns li');
   let input = document.getElementById('searchText').value;
   let resultElement = document.getElementById('result');
   let count = 0;
   for(let town of townList) {
      let text = town.textContent;
      if(text.match(input)){
         count++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }
   resultElement.textContent = `${count} matches found`;
}