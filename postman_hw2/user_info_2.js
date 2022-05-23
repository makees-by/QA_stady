pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


let jsonData = pm.response.json();
// let name_resp = jsonData.name;
// let age_resp = jsonData.age
// let salary_resp = jsonData.salary
// let family_resp = jsonData.family
// let u_salary_1_5_year_resp = jsonData.family.u_salary_1_5_year

let req = request.data
// let req_name = req.name
// let req_age = req.age
let req_salary = +req.salary

pm.test("have params", () => {    
    pm.expect(jsonData).to.have.property("start_qa_salary");
    pm.expect(jsonData).to.have.property("qa_salary_after_6_months");
    pm.expect(jsonData).to.have.property("qa_salary_after_12_months");
    pm.expect(jsonData).to.have.property("qa_salary_after_1.5_year");
    pm.expect(jsonData).to.have.property("qa_salary_after_3.5_years");
    pm.expect(jsonData).to.have.property("person");
    // pm.expect(jsonData.family.pets.dog).to.have.property("age");
    // pm.expect(jsonData.family.pets.dog.name).to.include("Luky");
    // pm.expect(String (jsonData.family.pets.dog.age)).to.include("4");
});  

// let resp_selary = jsonData.start_qa_salary
// let resp_selary = jsonData.qa_salary_after_6_months
// let resp_selary = jsonData.qa_salary_after_12_months
// let resp_selary = jsonData.qa_salary_after_1$.$5_year

pm.test("salary", function () {
        pm.expect(jsonData.start_qa_salary).to.eql(req_salary);
        pm.expect(jsonData.qa_salary_after_6_months).to.eql(req_salary*2);
        pm.expect(jsonData.qa_salary_after_12_months).to.eql(req_salary*2.7);
        pm.expect(jsonData["qa_salary_after_1.5_year"]).to.eql(req_salary*3.3);
        pm.expect(jsonData["qa_salary_after_3.5_years"]).to.eql(req_salary*3.8);
        

});



