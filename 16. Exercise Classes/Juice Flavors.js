function foo(args) {
  let juices = {};
  let bottles = {};
  function sumBottles(juice, quantity) {
    let bottlesTotal = 0;
    if (quantity >= 1000) {
      bottlesTotal = Math.floor(quantity / 1000);
      bottles[juice] = bottlesTotal;
    }
  }
  for (let x of args) {
    let [juice, quantity] = x.split(" => ");
    quantity = Number(quantity);
    if (!juices[juice]) {
      juices[juice] = 0;
    }
    juices[juice] += quantity;
    sumBottles(juice, juices[juice]);
  }
  for (const juice in bottles) {
    console.log(`${juice} => ${bottles[juice]}`);
  }
}

foo([
  "Orange => 2000",

  "Peach => 1432",

  "Banana => 450",

  "Peach => 600",

  "Strawberry => 549",
]);

foo([
  "Kiwi => 234",

  "Pear => 2345",

  "Watermelon => 3456",

  "Kiwi => 4567",

  "Pear => 5678",

  "Watermelon => 6789",
]);
