function solve() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let sentences = input.split(".").filter(s => s.length != 0);
  while(sentences.length > 0){
    let texts = sentences.splice(0,3).join('. ') + '.'; // The last index in the array wont have a dot. So we add it manually.
    let p = document.createElement('p');
    p.textContent = texts;
    output.appendChild(p);
  }
}
