function attachEventsListeners() {

    let divs = document.querySelectorAll('div');
    let daysOutput = document.getElementById('days');
    let hoursOutput = document.getElementById('hours');
    let minutesOutput = document.getElementById('minutes');
    let secondsOutput = document.getElementById('seconds');
    for(let div of divs){
        let button = div.children[2];
        button.addEventListener('click', onClick);
    }
    
    function onClick(ev){
        let currentDiv = ev.target.parentElement;
        let input = currentDiv.children[1].value;
        if(ev.target.id == 'daysBtn'){
            hoursOutput.value = Number(input)*24;
            minutesOutput.value = Number(input)*24*60;
            secondsOutput.value = Number(input)*24*60*60;
        }else if(ev.target.id == 'hoursBtn'){
            daysOutput.value = Number(input)/24;
            minutesOutput.value = Number(input)*60;
            secondsOutput.value = Number(input)*60*60;
        }else if(ev.target.id == 'minutesBtn'){
            daysOutput.value = Number(input)/60/24;
            hoursOutput.value = Number(input)/60
            secondsOutput.value = Number(input)*60;
        }else if(ev.target.id == 'secondsBtn'){
            daysOutput.value = Number(input)/60/60/24;
            hoursOutput.value = Number(input)/60/60;
            minutesOutput.value = Number(input)/60;
        }
    }
}