class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    area() {
        return (this.w * this.h);
     }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

/* PROTOTYPE FUNCTION FOR CLASS PARENT(RECTANGLE)*/

// Rectangle.prototype.area = function() {
//     return (this.w * this.h);
// }



/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
    constructor(s) {
        super(s)
        this.w = s;
        this.h = s;
    }
} 

const rec = new Rectangle(4, 4);
const sqr = new Square(4);
    
console.log(rec.area());
console.log(sqr.area());