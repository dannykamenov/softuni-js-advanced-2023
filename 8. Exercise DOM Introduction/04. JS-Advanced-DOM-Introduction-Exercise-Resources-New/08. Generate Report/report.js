function generateReport() {
  let headRowArray = Array.from(document.getElementsByTagName("input"));

  let bodyRowArray = Array.from(document.querySelectorAll("tbody tr"));

  let textArea = document.getElementById("output");

  let indices = [];

  let employees = [];

  for (let i = 0; i < headRowArray.length; i++) {
    if (headRowArray[i].checked === true) {
      //checks which box is ticked

      indices.push(i); //adds the column index of the checked box;
    }
  }
  for (let i = 0; i < bodyRowArray.length; i++) { //bodyRowArray length is 20 because there are 20 individuals
    let eInfo = {};

    let tdArray = Array.from(bodyRowArray[i].children); //accesses the information of each individual in the table.

    for (let j = 0; j < indices.length; j++) { 
      let key = headRowArray[indices[j]].name.toLowerCase(); //returns the checkbox name on the given index

      let value = tdArray[indices[j]].textContent; //returns the value on the given index -> for example if employees checkbox is checked and it is at index 0, then it will
                                               //return the value which is located on index 0 in the employees profile, meaning in this case that's the name of the employee

      eInfo[key] = value; // sets in the object the following -> employee: ${name} and etc...
    }
    employees.push(eInfo); // pushes the above obj into the array so it can be changed for the next employee and be pushed again.
  }

  textArea.textContent = JSON.stringify(employees);
}
