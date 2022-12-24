function encodeAndDecodeMessages() {
    let btns = document.querySelectorAll('button');
    let encodeBtn = btns[0].addEventListener('click', encodeMe);
    let decodeBtn = btns[1].addEventListener('click', decodeMe);


    function encodeMe(ev){
        let parentDiv = ev.target.parentElement;
        let textInput = parentDiv.children[1];
        let inputArr = Array.from(textInput.value);
        let newArr = [];
        for(let letter of inputArr){
            let letterAscii = letter.charCodeAt() + 1;
            let encodedLetter = String.fromCharCode(letterAscii);
            newArr.push(encodedLetter);
        }
        let outputDiv = document.getElementById('main').children[1];
        let output = outputDiv.children[1];
        output.textContent = newArr.join('');
        textInput.value = '';
    }

    function decodeMe(ev){
        let parentDiv = ev.target.parentElement;
        let textInput = parentDiv.children[1];
        let inputArr = Array.from(textInput.value);
        let newArr = [];
        for(let letter of inputArr){
            let letterAscii = letter.charCodeAt() - 1;
            let encodedLetter = String.fromCharCode(letterAscii);
            newArr.push(encodedLetter);
        }
        let outputDiv = document.getElementById('main').children[0];
        let output = outputDiv.children[1];
        textInput.textContent = newArr.join('');
    }

}