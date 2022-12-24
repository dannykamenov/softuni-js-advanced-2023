function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let obj = {};
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
      // ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
      for(let restaurant of input){
         let [name,employeeList] = restaurant.split(' - ');
         let employeeIndividual = employeeList.split(', ');
         for(let employee_profile of employeeIndividual){
            let [employee,salary] = employee_profile.split(' ');
            if(!obj.hasOwnProperty(name)){
               obj[name] = {};
            }
            if(obj.hasOwnProperty(name)){
               obj[name][employee] = Number(salary);
            }
            

         }
      }
      let entries = Object.entries(obj);
      for(let entry of entries){
         let key = entry[0];
         let values = Object.entries(entry[1]);
         for(let [name, salary] of values){
            totalSalary += salary;

         }
         avgSalary = totalSalary / values.length;
         if(avgSalary > currAvgSalary){
            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }
      }

      let print = '';

      let result = Object.entries(obj[bestName]).sort((a,b) => b[1] - a[1]);
      result.forEach(x => print += `Name: ${x[0]} With Salary: ${x[1]} `);
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;
      document.querySelector('#workers p').textContent = print;
   }
}