/*const obj = {
    name: 'Peter',
    outer() {
        console.log(this);

        const inner = () => console.log(this);
        inner();
    }
}

obj.outer();*/

const obj = {
    name: 'Peter',
    outer() {
        console.log(this);

        function inner() { console.log(this); }
        inner();
    }
}

obj.outer();