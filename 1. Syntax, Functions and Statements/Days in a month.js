function solve(month,year){
    let days = 0;
    switch(month){
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            days = 31;
            console.log(days);
            break;
        case "4":
        case "6":
        case "9":
        case "11":
            days = 30;
            console.log(days);
            break;
        case "2":
            if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
                days = 29;
                console.log(days);
            }else{
                days = 28;
                console.log(days);
            }
            break;
    }
}