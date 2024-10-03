export abstract class Shape {
  abstract calculateArea(): number;
}

export class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

export class Rectangle extends Shape {
  constructor(private height: number, private width: number) {
    super();
  }

  calculateArea(): number {
    return this.height * this.width;
  }
}

export class Triangle extends Shape {
  constructor(private length: number) {
    super();
  }

  calculateArea(): number {
    return 0.5 * this.length * this.length;
  }
}

export class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  calculateArea(): number {
    return Math.pow(this.side, 2);
  }
}

export class ShapeCalculator {
  constructor(private shapes: Shape[]) {}

  calculateArea(): number {
    return this.shapes.reduce(
      (total, shape) => total + shape.calculateArea(),
      0
    );
  }
}
