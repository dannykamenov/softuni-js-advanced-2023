function solve(input){
    let carData = {};

    let instructions = {
        create: (obj1, inherits, obj2) => 
            (carData[obj1] = inherits ? Object.create(carData[obj2]) : {})
            ,
        set: (b,c,d) => (carData[b][c] = d),
        print: b => {
            let entries = [];
            for(let key in carData[b]){
                entries.push(`${key}:${carData[b][key]}`);
            } 
            console.log(entries.join(', '));
        } 
    };

    input.forEach(x => {
        [a,b,c,d] = x.split(' ');

        instructions[a](b,c,d);
    });
}

solve([
  "create c1",

  "create c2 inherit c1",

  "set c1 color red",

  "set c2 model new",

  "print c1",

  "print c2",
]);
