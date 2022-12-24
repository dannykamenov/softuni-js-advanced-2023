function solve(area, vol, input) {

    let data = JSON.parse(input);
    let result = [];
    for(let row of data){
        let areaResult = Math.abs(area.call(row));
        let volResult = Math.abs(vol.call(row));
        result.push({ area: areaResult, volume: volResult });
    }
    return result;
}


function area() {

    return Math.abs(this.x * this.y);
    
};

function vol() {

    return Math.abs(this.x * this.y * this.z);
    
};

solve(
  area,
  vol,
  `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`
);
