function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    document.getElementById('gradient').addEventListener('mousemove', onMouseOver );
    document.getElementById('gradient').addEventListener('mouseout', onMouseOut );
    let resultBox = document.getElementById('result');

    function onMouseOver(event){
        let result = Math.floor(event.offsetX / gradient.clientWidth * 100);
        resultBox.textContent = result + '%';
    }

    function onMouseOut(event){
        resultBox.textContent = '';
    }
}