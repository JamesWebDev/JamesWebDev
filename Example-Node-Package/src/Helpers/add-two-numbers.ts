export class AddTwoNumbers{
    public numberone:number;
    public numbertwo:number;
    public result:number
    constructor(one:number,two:number){
        this.numberone = one;
        this.numbertwo = two;
        this.addThemTogether();
        this.logTheResult();
    }
    addThemTogether(){
        this.result = this.numberone + this.numbertwo
    }
    logTheResult(){
        console.log(this.result)
    }
}