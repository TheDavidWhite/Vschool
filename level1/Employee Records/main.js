function Emplooyees(name, job_title, salary, statu){
    this.name = name
    this.job_title  = job_title
    this.salary = salary
    this.statu = statu
}
var boss = new Emplooyees("david", "ceo", 200000, "full time")
var first = new Emplooyees("frank", "assiant ceo", 170000, "full time")
var lead = new Emplooyees("james", "team lead", 150000, "full time")
var worker = new Emplooyees("brandon", "dev", 125000, "part time")

Emplooyees.prototype.print = function () {
    console.log(this.name, this.job_title, this.salary, this.statu);
}


boss.print();
first.print();
lead.print();
worker.print();
