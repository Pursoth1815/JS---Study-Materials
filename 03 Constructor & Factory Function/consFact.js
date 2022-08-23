// PascalNotation, New keyword, this - Constructor Function (*Should not be an arrow function*)

// camelNotation, return - Factory Function

// Factory Function

const factoryFunction = (radius) => {
    return {
        radius,
        draw() {
            console.log('draw FF');
        }
    };
}

const myFactoryFunction = factoryFunction(2);

myFactoryFunction.draw();


// Constructor Function

function ConstructorFunction (radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw CF');
    }
}

const MyConstructorFunction = new ConstructorFunction(3);

MyConstructorFunction.draw();
