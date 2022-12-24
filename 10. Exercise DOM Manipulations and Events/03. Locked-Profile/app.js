function lockedProfile() {
    let btns = document.querySelectorAll('button');
    for(let btn of btns){
        btn.addEventListener('click', onClick);
    }

    function onClick(ev) {
        let profile = ev.target.parentElement;
        let unlocked = profile.children[4];
        if(unlocked.checked){
            let hidden = profile.children[9];  
            if(ev.target.textContent == 'Show more'){
                hidden.style.display = 'block';
                ev.target.textContent = 'Hide it';
            }else if(ev.target.textContent == 'Hide it'){
                hidden.style.display = 'none';
                ev.target.textContent = 'Show more';
            }
        }
    }
}