function squreArea(side){
    return `The area of squre is ${side * side}sqr metre`;
};

function rectangleArea(length,breadth){
    return `The area of rectangle is ${length * breadth}sqr metre`;
};

function circleArea(radius){
    return `The area of circle is ${Math.ceil(Math.PI * radius * radius)}sqr metre`;
};

module.exports = {
    squreArea,
    rectangleArea,
    circleArea
}