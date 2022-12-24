function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value;
    let result = document.getElementById('result');
    let table = document.querySelectorAll('#customers tr td:nth-child(2)');
    let isDeleted = false;
    for(let line of table){
        if(line.textContent == email){
            tr = line.parentNode;
            tr.parentNode.removeChild(tr);
            isDeleted = true;
        }
    }
    if(isDeleted){
        result.textContent = 'Deleted.';
    }else{
        result.textContent = 'Not found.';
    }
    document.getElementsByName('email')[0].value = '';
}