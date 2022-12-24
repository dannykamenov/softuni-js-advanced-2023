function solution(a){
    let num = a;

    return function add(b){
        return num + b
    }
}

console.log(solution(15)(2))