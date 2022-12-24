function solve() {
  let input = document.getElementById('text').value;
  let command = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let inputArr = input.split(' ');
  let newArr = [];
  let finalMsg;
  let tempWord;
  switch (command) {
    case "Camel Case":
      for(let i = 0; i < inputArr.length; i++) {
        if(i == 0){
          tempWord = inputArr[i].toLowerCase();
          newArr.push(tempWord);
        }else{
          tempWord = inputArr[i].toLowerCase();
          tempWord = tempWord.charAt(0).toUpperCase() + tempWord.slice(1);
          newArr.push(tempWord);
        }
      }
      finalMsg = newArr.join('');
      break;
    case "Pascal Case":
      for(let i = 0; i < inputArr.length; i++) {
        tempWord = inputArr[i].toLowerCase();
        tempWord = tempWord.charAt(0).toUpperCase() + tempWord.slice(1);
        newArr.push(tempWord);
      }
      finalMsg = newArr.join('');
      break;
    default:
      finalMsg = 'Error!';
      break;
  }
  result.textContent = finalMsg;
}