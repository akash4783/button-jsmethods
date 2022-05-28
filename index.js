
//  Create Js methods by which can find highest salary, 
// lowest salary, sort by User, open date and balance from below constant.
// Please use advance js.
const acctData = [
    {"acctNum": "A1234", "user": "Alice", "openDate": "4/5/89"},
    {"acctNum": "A5231", "user": "ZBob", "openDate": "4/5/11"},
    {"acctNum": "A9921", "user": "Eric", "openDate": "4/5/19"},
    {"acctNum": "A8191", "user": "Scott", "openDate": "4/5/19"}
    ];
    
    const balance = {
    "A1234": 4593.22,
    "A9921": 0,
    "A5231": 232142.5,
    "A8191": 4344,
    "akash":4783,
    "patil":4785
    };
      const valuesBalance = Object.values(balance);
      const Maximum_Salary= Math.max(...valuesBalance);
      const Minimum_Salary= Math.min(...valuesBalance); 
    
    const User=acctData.sort((a,b) => (a.user > b.user) ? 1 : ((b.user > a.user) ? -1 : 0))
    
    const OpenDate=acctData.sort((a,b) => (a.openDate > b.openDate) ? 1 : ((b.openDate > a.openDate) ? -1 : 0))
    
    let sortable = [];
    for (var salary in balance) {
        sortable.push([salary, balance[salary]]);
    }
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });
    
    console.log("Maximum Salary:",Maximum_Salary)
    console.log("Minimum Salary:",Minimum_Salary)
    console.log("Sorted_User:",User)
    console.log("Sorted_openDate:",OpenDate)
    console.log("Sortable_salary:",sortable)