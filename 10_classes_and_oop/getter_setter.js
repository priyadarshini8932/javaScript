class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){ //while making getters and setter property ka nam method per likhna parega
        return this._email.toUpperCase() 
        //here _email is the private property of get 

    }
    set email(value){
        this._email=value;
    }
    get password(){ //password ke value ko get krna chah rhe ho
        // return this._password.toUpperCase()
        return `${this._password}hitesh`
    }

    set password(value){ //password ke value ko set krna chah rhe ho
        this._password=value
    }
}
//getter and setter used when we do not want to give access of password
//getter define kiya to setter to krna hoga define
const hitesh=new User("h@hitesh.ai","abc")
console.log(hitesh.password)
console.log(hitesh.email)