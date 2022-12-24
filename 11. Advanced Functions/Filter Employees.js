function employees(data, criteria) {
  let dataParsed = JSON.parse(data);
  let [prefix, value] = criteria.split("-");
  let isAll = criteria === "all" ? true : false;
  let count = 0;
  if (isAll) {
    count = 0;
    for (let person of dataParsed) {
      printAll.apply(person);
      function printAll() {
        console.log(
          `${count}. ${this.first_name} ${this.last_name} - ${this.email}`
        );
      }
      count++;
    }
  } else {
    count = 0;
    for (let selected of dataParsed) {
      filtered.apply(selected);
      function filtered() {
        if (this[prefix] == value) {
          console.log(
            `${count}. ${this.first_name} ${this.last_name} - ${this.email}`
          );
          count++;
        }
      }
    }
  }
}

employees(
  `[{

    "id": "1",
    
    "first_name": "Kaylee",
    
    "last_name": "Johnson",
    
    "email": "k0@cnn.com",
    
    "gender": "Female"
    
    }, {"id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" }, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`,
  "last_name-Johnson"
);
