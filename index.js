const employees = {
    name: "Sam",
    streetAddress: "11 Broadway"
};


function updateEmployeeWithKeyAndValue(object, key, value) {
    const newObj = {...employees};

    newObj[key] = value;

    return newObj;
}
const employee = updateEmployeeWithKeyAndValue(
    employees,
    "name",
    "Sam"
);


function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    employee["streetAddress"] = "12 Broadway"
    return employee;
};


function deleteFromEmployeeByKey() {
    const newEmployee = {...employee};

    delete newEmployee.name;

    return newEmployee;
};


function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;

    return employee;
};