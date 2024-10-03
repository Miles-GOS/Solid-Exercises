export enum EmployeeType {
  FullTime,
  PartTime,
  Intern,
  Freelancer,
}

export abstract class Employee {
  constructor(public name: string) {}

  abstract calculateSalary(): number;
}

export class FullTime extends Employee {
  calculateSalary(): number {
    return 5000;
  }
}

export class PartTime extends Employee {
  calculateSalary(): number {
    return 3000;
  }
}

export class Intern extends Employee {
  calculateSalary(): number {
    return 1000;
  }
}

export class Freelancer extends Employee {
  private hoursWorked: number;

  constructor(name: string, hoursWorked: number) {
    super(name);
    this.hoursWorked = hoursWorked;
  }

  calculateSalary(): number {
    return this.hoursWorked * 40;
  }
}
