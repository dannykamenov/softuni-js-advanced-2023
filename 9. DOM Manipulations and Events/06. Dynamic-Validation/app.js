function validate() {
    let reg = /([\w\-.]+)@([a-z]+)(\.[a-z]+)/g;
    let input = document.getElementById('email');
    let inputValue = input.value;

    input.addEventListener('change', check);


    function check(event){
        if(reg.test(event.target.value)){
            event.target.removeAttribute('class');
            return;
        }

        event.target.className = 'error';
    }
}