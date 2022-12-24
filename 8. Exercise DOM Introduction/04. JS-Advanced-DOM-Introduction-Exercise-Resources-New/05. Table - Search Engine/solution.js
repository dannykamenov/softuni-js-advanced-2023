function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rows = document.querySelectorAll('tbody tr');
   let input = document.getElementById('searchField');

   function onClick() {
      for(let line of rows){
         line.classList.remove('select');
         if(line.innerHTML.includes(input.value)){
            line.className = 'select';
         }
      }
      input.value = '';
   }
}