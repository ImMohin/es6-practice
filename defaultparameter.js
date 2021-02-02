function add(num1, num2=20){
    // num2 parameter value jdi dewa na thke 
    // if(num2 == undefined){
    //     num2 = 0 ;
    // }
    // OR 
    // num2 = num2 || 0;
    return num1 + num2 ;
}

const result = add(10);
console.log('summation:', result);