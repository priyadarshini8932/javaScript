function SetUsername(username){
    //complex DB calls
    this.username=username
    console.log("called");
}

function createUser(username,email,password){
    // SetUsername(username) isse call hone ke baad wo gec se gayab so uske varible including this.username idhar aya nhi pehle hi gayab
    
    SetUsername.call(this, username)//this will make SetUsername use createUser's this rather than its own this
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@fb.com","123")
console.log(chai);