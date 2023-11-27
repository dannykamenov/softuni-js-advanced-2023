function solve(input){
	let index = 0;
	let command = input[index];
	let bestgoals = 0;
	let currentplayer;
	let currentgoals;
	while(command !== "END"){
		command = input[index];
		currentplayer = command;
		index++;
		currentgoals = Number(input[index]);
		index++;
		bestgoals = currentgoals;
		if(currentgoals >= 10){
			console.log(`${currentplayer} is the best player!`);
			console.log(`He has scored ${currentgoals} goals and made a hat-trick !!!`);
			break;
		}if(command === "END"){
			if(bestgoals < 3){
				
				console.log(`He has scored ${bestgoals} goals.`);
			}
			if(bestgoals >= 3 && bestgoals < 10){
				console.log(`${currentplayer} is the best player!`);
				console.log(`He has scored ${currentgoals} goals and made a hat-trick !!!`);
			}
		}

	}
	
		
}

solve(["Neymar","2","Ronaldo","1","Messi","3","END"])