pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

let jsonData = pm.response.json();

let req = request.data
let req_salary = +req.salary

pm.test("have params", () => {    
    pm.expect(jsonData).to.have.property("start_qa_salary");
    pm.expect(jsonData).to.have.property("qa_salary_after_6_months");
    pm.expect(jsonData).to.have.property("qa_salary_after_12_months");
    pm.expect(jsonData).to.have.property("qa_salary_after_1.5_year");
    pm.expect(jsonData).to.have.property("qa_salary_after_3.5_years");
    pm.expect(jsonData).to.have.property("person");
    
});  

pm.test("salary", function () {
        pm.expect(jsonData.start_qa_salary).to.eql(req_salary);
        pm.expect(jsonData.qa_salary_after_6_months).to.eql(req_salary*2);
        pm.expect(jsonData.qa_salary_after_12_months).to.eql(req_salary*2.7);
        pm.expect(jsonData["qa_salary_after_1.5_year"]).to.eql(req_salary*3.3);
        pm.expect(jsonData["qa_salary_after_3.5_years"]).to.eql(req_salary*3.8);
        pm.expect(jsonData.person.u_name[1]).to.eql(req_salary);
        pm.expect(jsonData.person.u_salary_5_years).to.eql(req_salary*4.2);
});

for (let key in jsonData.person) {
    console.log( "элемент " + key + " значение: " + jsonData.person[key] );
}

