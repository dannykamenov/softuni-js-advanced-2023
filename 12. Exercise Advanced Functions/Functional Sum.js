function solve(n){
    let num = 0;
    function add(x){
        num += x;
        return add;
    }
    add.toString = () => num;
    return add(n);
}
let add = solve();
console.log(add(1)(6)(-3))
