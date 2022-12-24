function calc(){
    let input_one = Number(document.getElementById('num1').value);
    let input_two = Number(document.getElementById('num2').value);
    let final_sum = document.querySelector('#sum');
    let total_sum = input_one + input_two;
    final_sum.value = Number(total_sum);
}