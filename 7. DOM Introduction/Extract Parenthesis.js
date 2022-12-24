function extract(id){
    let regexp = /\(([^(]+)\)/g;
    let text = document.getElementById(id).textContent;
    let match = regexp.exec(text);
    let countries = [];
    while(match){
        countries.push(match[1]);
        match = regexp.exec(text);
    }

    return countries.join('; ')
}