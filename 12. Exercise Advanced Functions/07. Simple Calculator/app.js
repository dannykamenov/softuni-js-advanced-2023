function calculator() {
    let num1 = null;
    let num2 = null;
    let result = null;
    return {
        init,
        add,
        subtract
    }

    function init(n1,n2,res){
        num1 = document.querySelector(n1);
        num2 = document.querySelector(n2);
        result = document.querySelector(res);
        console.log(num1)
    }

    function add(){
        result.value = Number(num1.value) + Number(num2.value);
    }

    function subtract(){
        result.value = Number(num1.value) - Number(num2.value);
    }
}




