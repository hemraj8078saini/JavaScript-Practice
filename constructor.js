function writen(name,age,qualification){
    this.firstname=name;
    
    this.ages=age;
    this.qualifications=qualification;
    console.log( this.firstname)
    console.log( this.ages)
    console.log( this)
}
const details = new  writen("John", 50, "Graduation");
console.log(details)



