class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        return this.sides.reduce((s, v) => s + v);
    }
}

class Triangle extends Polygon {
    get isValid() {
        const [sideA, sideB, sideC] = this.sides;
        return sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB;
    }
}

class Square extends Polygon {
    get isValid() {
        const [firstSide] = this.sides;
        return this.sides.every(s => s === firstSide);
    }
    get area() {
        return this.sides[0] ** 2;
    }
}