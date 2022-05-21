pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

let jsonData = pm.response.json();
let name_resp = jsonData.name
let age_resp = jsonData.age
let salary_resp = jsonData.salary

let req_name = pm.request.url.query.get("name")
let req_age = +pm.request.url.query.get("age")
let req_salary = +pm.request.url.query.get("salary")

console.log("response salary = " , salary_resp)
console.log("request salary = " , req_salary )
console.log("response salary 0st = " , salary_resp[0])
console.log("response salary 1st = " , salary_resp[1])
console.log("response salary 2st = " , salary_resp[2])

pm.test("Name_age", function () {
    pm.expect(name_resp).to.eql(req_name);
    pm.expect(age_resp).to.eql(req_age);
   
});

pm.test("Salary", function () {
    pm.expect(salary_resp[0]).to.eql(req_salary);
    pm.expect(+salary_resp[1]).to.eql(2*req_salary);
    pm.expect(+salary_resp[2]).to.eql(3*req_salary);
});

pm.environment.set("name", jsonData.name);
pm.environment.set("age", jsonData.age);
pm.environment.set("salary", jsonData.salary[0]);

for (let i = 0; i < jsonData.salary.length; i++) {
	console.log(jsonData.salary[i]);
}

let salary_arr = pm.environment.get("salary");

for (let i = 0; i < salary_arr.length; i++) {
	console.log(salary_arr[i]);
}
