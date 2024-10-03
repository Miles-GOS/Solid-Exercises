import {
  Circle,
  Rectangle,
  Triangle,
  Square,
  ShapeCalculator,
} from "../Solid/2.Ocp_exercise/Shape";
describe("Shape Calculations", () => {
  test("Circle Area", () => {
    const circle = new Circle(5);
    expect(circle.calculateArea()).toBeCloseTo(78.54, 2);
  });

  test("Rectangle Area", () => {
    const rectangle = new Rectangle(4, 5);
    expect(rectangle.calculateArea()).toBe(20);
  });

  test("Triangle Area", () => {
    const triangle = new Triangle(3);
    expect(triangle.calculateArea()).toBe(4.5);
  });

  test("Square Area", () => {
    const square = new Square(4);
    expect(square.calculateArea()).toBe(16);
  });

  test("Total Area Calculation", () => {
    const shapes = [
      new Circle(5),
      new Rectangle(4, 5),
      new Triangle(3),
      new Square(4),
    ];
    const shapeCalculator = new ShapeCalculator(shapes);
    expect(shapeCalculator.calculateArea()).toBeCloseTo(119.04, 2);
  });
});
