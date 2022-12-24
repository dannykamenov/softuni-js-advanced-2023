function solve(num){
    let print = '';
    for(let x = 0; x < num; x++){
        print += '* '
    }
    for(let y = 0; y < num; y++){
        console.log(print);
    }
}

solve(5);