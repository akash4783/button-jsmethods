
//  Create Js methods by which can find highest salary, 
// lowest salary, sort by User, open date and balance from below constant.
// Please use advance js.
const acctData = [
{"acctNum": "A1234", "user": "Alice", "openDate": "4/5/89"},
{"acctNum": "A5231", "user": "Bob", "openDate": "4/5/11"},
{"acctNum": "A9921", "user": "Eric", "openDate": "4/5/19"},
{"acctNum": "A8191", "user": "Scott", "openDate": "4/5/19"}
];

const balance = {
"A1234": 4593.22,
"A9921": 0,
"A5231": 232142.5,
"A8191": 4344
};


for(const i in acctData ){
    console.log(i)
}
const highestSalary = acctData.filter(()=>)



const max = acctData.reduce(function(old, item) {
    return (old.y > item.y) ? old : item
}) 
console.log('max', max.salary)