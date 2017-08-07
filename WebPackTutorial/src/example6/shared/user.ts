export enum UserType {
    Nurse,
    Doctor,
    Patient
}
export class user {

    public FirstName: string;
    public LastName: string;
    public Birthday: Date;
    public UserType: UserType;
    public Speciality: string;

    constructor(
        firstname: string,
        lastname: string,
        birthday: Date,
        usertype: UserType,
        speciality: string
    ){
        console.log('user constructor has been called');
        this.FirstName = firstname;
        this.LastName = lastname;
        this.Birthday = birthday;
        this.UserType = usertype;
        this.Speciality = speciality;
    }

    public getDisplayName = () =>{
        if(this.UserType == UserType.Doctor){
            return `${this.LastName}, ${this.FirstName}, MD`
        }
        if(this.UserType == UserType.Nurse){
            return `${this.LastName}, ${this.FirstName}, RN`
        }
        if(this.UserType == UserType.Patient){
            return `${this.LastName}, ${this.FirstName}`
        }
        return `${this.LastName}, ${this.FirstName}`
    }
}