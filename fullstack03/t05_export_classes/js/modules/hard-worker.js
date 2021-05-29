class HardWorker {
    name;
    age = 1;
    salary = 100;
    constructor(name, age, salary) {
        this.name = name;
        // }
        // constructor(age) {
        if (age < 1 || age > 100)
            this.age = 1;
        else
            this.age = age;
        // }
        // constructor(salary) {
        if (salary < 100 || salary > 10000)
            this.salary = 100;
        else
            this.salary = salary;
    }
    toObject(){
        return  "Object { name: \"" + this.name + "\", age: " + this.age + ", salary: " + this.salary + " }";
    }

}




export{HardWorker };