function solve(a,b){
    let num1 = Number(a), num2 = Number(b);
    let sum = 0;
    for(let i = num1; i <= num2; i++){
        sum += i;
    }
    console.log(sum);
}

solve('1','5')