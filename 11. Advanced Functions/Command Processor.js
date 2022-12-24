function solution(){
    let context_string = '';
    function append(string) {
        context_string += string;
    }
    function removeStart(n){
        context_string = context_string.slice(n);
    }
    function removeEnd(n){
        context_string = context_string.slice(0, -n);
    }
    function print(){
        console.log(context_string);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solution();
firstZeroTest.append('hello'); 
firstZeroTest.append('again'); 
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();