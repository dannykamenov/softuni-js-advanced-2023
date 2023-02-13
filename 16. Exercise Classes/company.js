class Company {

    constructor() {
        this.departments = {};
    }

    addEmployee(username, salary, position, department) {
        if (!username || !salary || !position || !department) {
            throw new Error("Invalid input!");
        }
        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ username, salary, position });
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = "";
        let bestAverageSalary = 0;

        for (const department in this.departments) {
            let totalSalary = 0;
            this.departments[department].forEach(e => totalSalary += e.salary);
            let averageSalary = totalSalary / this.departments[department].length;

            if (averageSalary > bestAverageSalary) {
                bestAverageSalary = averageSalary;
                bestDepartment = department;
            }
        }

        let result = `Best Department is: ${bestDepartment}`;
        result += `\nAverage salary: ${bestAverageSalary.toFixed(2)}`;

        this.departments[bestDepartment] = this.departments[bestDepartment].sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));

        this.departments[bestDepartment].forEach(e => result += `\n${e.username} ${e.salary} ${e.position}`); 

        return result;
    }
}   


let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
