// Your code here
class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
      }

      get perimeter() {
        let sum = 0;
        for (var side of this.sides) {
          sum += side
        }
        return sum
      }
      }

      class Triangle extends Polygon {
        get isValid() {
          if(this.countSides === 3) {
            let [a, b, c] = this.sides
            if ((a + b > c) && (a + c > b) && (b + c > a)) {
              return true
            }
            else { return false }
          }
        }
      }
      
      class Square extends Polygon {
        get isValid() {
          let [side, , , ] = this.sides
      
          if (this.sides.every(i => i === side)) {
            return true
          }
          else { return false }
        }
      
        get area() {
          return this.sides[0]**2
        }
      }
    
