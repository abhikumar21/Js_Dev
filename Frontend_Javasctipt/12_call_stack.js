let val1 = 10;
let val2 = 8;
function addNum(num1, num2) {
    let total = num1+num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(15, 12);

//1. Global Execution (this->)
//2. Memory Phase
    // val1 = undefined
    // val2 = undefined
    // addNum = definition
    // result1 = undefined
    // result2 = undefined
// 3. Execution Context 
    // val1 = 10
    // val2 = 8;
    // addNum -> new (memory phase + execution phase)

        //1.1 Memory Phase
        // num1 = undefined
        // num2 = undefined
        // total = undefined

         //1.2 Execution context
         //num1 = 10
         //num2 = 8
         //total = 18 (returned to global executional context, new is deleted)

     // addNum -> new (memory phase + execution phase)  
         //2.1 Memory Phase
         // num1 = undefined
         // num2 = undefined
         // total = undefined

         //2.2 Execution context
         //num1 = 15
         //num2 = 12
         //total = 27 (returned to global executional context)

