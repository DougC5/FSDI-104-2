//Create a program that only uses your own functions, to calculate the area of the following shapes:
//- Triangle
//- Trapeze
//- Circle
//- Rectangle
//
//Use the control flow instructions (if, switch, cycles) to "select" which area of what shape to calculate.
//
//You can use the prompt command to ask tghe user for values.


function getShape() {

    let shape = prompt('Enter the number of the shape you would like to calcualte:\n 1 - Triangle\n 2 - Trapezoid\n 3 - Circle\n 4 - Rectangle');

    while (shape <= 0 || shape >= 5) {
        shape = prompt('THE NUMBER YOU ENTERED IS INVALID. Enter the number of the shape you would like to calcualte:\n 1 - Triangle\n 2 - Trapeze\n 3 - Circle\n 4 - Rectangle');
    }
    return shape;
}

function calculate(type) {

    switch (type) {

    case '1':
    { // 1 - Triangle
        let b = prompt('Enter the base length of the triangle in cm');
        let h = prompt('Enter the height of the triangle in cm');
        let area = (1 / 2) * b * h;
        alert('The area of the Triangle is: ' + area + ' cm');
        break;
    }

    case '2':
    { //2 - Trapezoid
        let b1 = prompt('Enter the 1st base length of the Trapezoid in cm');
        let b2 = prompt('Enter the 2nd base length of the Trapezoidin cm');
        let h = prompt('Enter the height of the Trapezoid in cm');
        let area = ((b1 + b2) * h) / 2;
        alert('The area of the Trapezoid is: ' + area + ' cm');
        break;
    }

    case '3':
    { //3 - Circle
        let r = prompt('Enter the radius of the circle in cm');
        let area = (Math.PI * Math.pow(r, 2));
        alert('The area of the cirlce is: ' + area + ' cm');
        break;
    }

    case '4':
    { //4 - Rectangle

        let b = prompt('Enter the length of the rectangle in cm');
        let h = prompt('Enter the height of the rectangle in cm');
        let area = b * h;
        alert('The area of the rectangle is: ' + area + ' cm');
        break;
    }

    default:
        alert('Error or somehting is wrong');

    }

}

let shape = getShape();
calculate(shape);
