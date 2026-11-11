const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const karanArjun1 = {
    salary: 50000,
};

const karanArjun2 = {
    salary: 50000,
};

const karanArjun3 = {
    salary: 50000,
};

const karanArjun4 = {
    salary: 50000,
};

const karanArjun5 = {
    salary: 50000,
};

karanArjun1.__proto_ = employee;
karanArjun2.__proto_ = employee;
karanArjun3.__proto_ = employee;
karanArjun4.__proto_ = employee;
karanArjun5.__proto_ = employee;