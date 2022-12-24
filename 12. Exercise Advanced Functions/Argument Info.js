function solve(...args) {
  let obj = {};
  [...args].forEach((x) => {
    typeof x == 'object' ? console.log(`${typeof x}:`) : console.log(`${typeof x}: ${x}`);
    obj[typeof x] = (obj[typeof x] || 0) + 1; 
  });
  Object.entries(obj).sort((a, b) => b[1] - a[1]).forEach(x => {
    console.log(`${x[0]} = ${x[1]}`);
  });
}

solve({ name: "bob" }, 3.333, 9.999);
