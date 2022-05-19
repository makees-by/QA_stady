pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


let jsonData = pm.response.json();
let name_resp = jsonData.name;
let age_resp = jsonData.age
let salary_resp = jsonData.salary
let family_resp = jsonData.family
let u_salary_1_5_year_resp = jsonData.family.u_salary_1_5_year

console.log(family_resp)


let req = request.data
let req_name = req.name
let req_age = req.age
let req_salary = req.salary




pm.test("name_resp", function () {
    
    pm.expect(name_resp).to.eql("Max");
});

pm.test("age_resp", function () {
    
    pm.expect(age_resp).to.eql("36");
});

pm.test("salary_resp", function () {
    
    pm.expect(salary_resp).to.eql(1500);
});

pm.test("name_req", function () {
    
    pm.expect(name_resp).to.eql(req_name);
});

pm.test("age_req", function () {
    
    pm.expect(age_resp).to.eql(req_age);
});

pm.test("salary_req", function () {
    
    pm.expect(salary_resp).to.eql(+req_salary);
});

pm.test("salary_req", function () {
    
    pm.expect(u_salary_1_5_year_resp).to.eql(+req.salary * 4);
});
