let DATA = "SECRET INFORMATION";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ", DATA);
    }
}

let student1 = new User("ankit", "anit03061971@gmail.com");
let student2 = new User("ankesh", "ankesh03061971@gmail.com");

let teacher1 = new User("Dr. Rajesh","rajesh03061971@gmail.com");

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "some new value";
    }
}

let admin1 = new Admin("admin", "admin@outlook.com");
