/*function solution(input) {
  let recipes = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };

  let stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0
  }

  let commands = {
    restock: (element,quantity) => {
        if(stock.hasOwnProperty(element)){
            stock[element] += Number(quantity);
            return 'Success';
        }else{
            return `Error: not enought ${element} in stock`;
        }
    },
    prepare: (meal,quantity) => {

    },
    report: () => {
        let arr = [];
        Object.entries(stock).forEach(x => {
            arr.push(`${x[0]}=${x[1]}`);
        });
        console.log(arr.join(' '));
    }
  }

  function manager(command){
    let [a,b,c] = command.split(' ');
    return commands[a](b,c);
  }
}


let manager = solution ();
console.log(manager("restock flavour 50")); */


function solution(){

    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const cmds = {
        restock,
        report,
        prepare
    }

    let recipes = {
        apple: {
          carbohydrate: 1,
          flavour: 2,
        },
        lemonade: {
          carbohydrate: 10,
          flavour: 20,
        },
        burger: {
          carbohydrate: 5,
          fat: 7,
          flavour: 3,
        },
        eggs: {
          protein: 5,
          fat: 1,
          flavour: 1,
        },
        turkey: {
          protein: 10,
          carbohydrate: 10,
          fat: 10,
          flavour: 10,
        }
    };

    return manager;

    function manager(line){
        const [a,b,c] = line.split(' ');
        return cmds[a](b,c);
    }

    function restock(b,c){
        stock[b] += Number(c);
        return `Success`
    }

    function report(){
        let arr = [];
        Object.entries(stock).forEach(x => {
            arr.push(`${x[0]}=${x[1]}`);
        });
        return arr.join(' ');
    }

    function prepare(recipeAsString, qty){
        qty = Number(qty);
        const recipe = Object.entries(recipes[recipeAsString]);
        recipe.forEach(x => x[1] *= qty);
        for(let ingredient of recipe){
            let nutrient = ingredient[0];
            if(stock[nutrient] < ingredient[1]){
                return `Error: not enough ${nutrient} in stock`
            }else{
                stock[nutrient] -= ingredient[1];
            }
        }
        return `Success`;
    }
}

let manager = solution();

console.log (manager ("restock flavour 50")); // Success

console.log (manager ("prepare lemonade 4"));