function solve(r){
    if(typeof r !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${typeof r}.`);
    }else{
        console.log((Math.PI * r*r).toFixed(2));
    }
}

solve(5);
solve('name')