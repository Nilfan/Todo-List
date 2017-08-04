export class Todo{
    title: string;
    completed: boolean;
    changing: boolean;
    
    constructor(title: string, completed : boolean  = false, changing: boolean = false){
        this.title = title;
        this.completed = completed;
        this.changing = changing;
    }
    
    //or if without "title:string" and "competed:boolean" in class write constructor like this:
    //constructor(public title:string, public completed:boolean = false){}
}