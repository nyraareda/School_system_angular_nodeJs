export class Department {
    
    constructor(private deptname:string,private id:number){
        
    }
    set Iddept(id:number){
        this.id=id;
    }
    get Iddept(){
        return this.id
    }
    set Namedept(deptname:string){
        this.deptname=deptname;
    }
    get Namedept(){
        return this.deptname
    }
    

}

