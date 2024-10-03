import { Circle, Rectangle, Triangle, Square, ShapeCalculator } from "./Shape";
import { FullTime, PartTime, Intern, Freelancer } from "./Employee";

const shapes = [
  new Circle(5),
  new Rectangle(4, 5),
  new Triangle(3),
  new Square(4),
];

const shapeCalculator = new ShapeCalculator(shapes);
console.log(`Total Area: ${shapeCalculator.calculateArea()}`);

const fullTimeEmployee = new FullTime("Alice");
console.log(
  `${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.calculateSalary()}`
);

const internEmployee = new Intern("Bob");
console.log(
  `${internEmployee.name}'s salary is ${internEmployee.calculateSalary()}`
);

const freelancer = new Freelancer("Charlie", 10);
console.log(`${freelancer.name}'s salary is ${freelancer.calculateSalary()}`);
