export class Student {
    
    constructor(private name:string,private id:number,private age:number){
        
    }
    set Id(id:number){
        this.id=id;
    }
    get Id(){
        return this.id
    }
    set Name(name:string){
        this.name=name;
    }
    get Name(){
        return this.name
    }
    set Age(age:number){
        this.age=age;
    }
    get Age(){
        return this.age
    }

}
// let s1:Student = new Student("Nyraa reda",1);
// s1.Id=90;
// console.log(s1);
