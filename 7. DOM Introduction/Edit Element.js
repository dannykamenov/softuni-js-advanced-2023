function edit(one,two,three){
    let wan = one.textContent; //textContent is used to access text contents of a specific element/id
    let tu = new RegExp(two, 'g');
    let tri = wan.replace(tu, three);
    one.textContent = tri;
}