/*<ul id='items'>
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
</ul>

<textarea id='result'>    
</textarea>

<br>

<button onclick='extractText()'>Extract Text</button>
*/

function extractText() {
    const inputs = document.querySelectorAll('ul#items li');
    let result = document.querySelector('#result');
    for(let line of inputs) {
        result.value += line.textContent + '\n';
    } 
}