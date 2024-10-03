import {
  FullTime,
  PartTime,
  Intern,
  Freelancer,
} from "../Solid/2.Ocp_exercise/Employee";
describe("Employee Salary Calculations", () => {
  test("Full-Time Employee Salary", () => {
    const employee = new FullTime("Alice");
    expect(employee.calculateSalary()).toBe(5000);
  });

  test("Part-Time Employee Salary", () => {
    const employee = new PartTime("Bob");
    expect(employee.calculateSalary()).toBe(3000);
  });

  test("Intern Employee Salary", () => {
    const employee = new Intern("Charlie");
    expect(employee.calculateSalary()).toBe(1000);
  });

  test("Freelancer Salary", () => {
    const freelancer = new Freelancer("David", 10);
    expect(freelancer.calculateSalary()).toBe(400);
  });
});
