export class Todo{
    title: string;
    completed: boolean;
    
    constructor(title: string, completed : boolean  = false){
        this.title = title;
        this.completed = completed;
    }
    
    //or if without "title:string" and "competed:boolean" in class write constructor like this:
    //constructor(public title:string, public completed:boolean = false){}
}