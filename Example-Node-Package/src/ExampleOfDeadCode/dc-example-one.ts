export class DeadCodeExpectItToBeRemoved {
    public message:string;
    constructor(msg:string){
        this.message = msg;
    }
    logTheClassesProperties =()=>{
        console.log(this.message);
    }
}