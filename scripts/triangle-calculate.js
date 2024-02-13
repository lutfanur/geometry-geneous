// **
//  Objective: get base, height of a triangle. Calculate the area by using the provided formula and then display the area

// **step -1: get the base value of the triangle
// **step -2: added in id in the base input field
// **step -3: use getElementById to access the input field
// **step -4: get value from the input field( value is string now)
// **step -5: convert the value to a number use parseFloat
// **step -1: get the base value of the triangle
// 

function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base);

    // get the triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is:', area);
    // display triangle area
    const triangleAreaSpan = document.getElementsByName('triangle-area');
    triangleAreaSpan.innerText = area;
}