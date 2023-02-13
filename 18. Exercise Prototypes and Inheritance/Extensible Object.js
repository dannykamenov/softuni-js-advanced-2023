function extensibleObject() {

    function Cyka() {}
    Cyka.prototype.extend = function (template) {
        for (let prop in template) {
            if (typeof template[prop] === "function") {
                Object.getPrototypeOf(this)[prop] = template[prop];
            } else {
                this[prop] = template[prop];
            }
        }
    }

    return new Cyka();
}

const myObj = extensibleObject();

console.log(myObj)


