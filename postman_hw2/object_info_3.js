pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

let jsonData = pm.response.json();
let name_resp = jsonData.name
let age_resp = jsonData.age
let salary_resp = jsonData.salary

let req_name = pm.request.url.query.get("name")
let req_age = pm.request.url.query.get("age")
let req_salary = +pm.request.url.query.get("salary")

pm.test("Name_age_salary", function () {
    pm.expect(name_resp).to.eql(req_name);
    pm.expect(age_resp).to.eql(req_age);
    pm.expect(salary_resp).to.eql(req_salary);
});

console.log(jsonData.family)

pm.test("dog have name", () => {
    
    pm.expect(jsonData.family.pets.dog).to.have.property("name");
    pm.expect(jsonData.family.pets.dog).to.have.property("age");
    pm.expect(jsonData.family.pets.dog.name).to.include("Luky");
    pm.expect(String (jsonData.family.pets.dog.age)).to.include("4");

});  
