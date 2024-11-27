     // Variables to store the current input, the operator, and the previous value
     let currentInput = '0';
     let prevInput = '';
     let operator = '';
     let result = null;

     // Get the display element
     const display = document.getElementById('display');

     // Function to update the display
     function updateDisplay() {
         display.textContent = currentInput;
     }

     // Handle digit buttons
     const digitButtons = document.querySelectorAll('.digit');
     digitButtons.forEach(button => {
         button.addEventListener('click', () => {
             if (currentInput === '0') {
                 currentInput = button.getAttribute('data-value');
             } else {
                 currentInput += button.getAttribute('data-value');
             }
             updateDisplay();
         });
     });

     // Handle operator buttons
     const operatorButtons = document.querySelectorAll('.operator');
     operatorButtons.forEach(button => {
         button.addEventListener('click', () => {
             if (prevInput === '') {
                 prevInput = currentInput;
                 currentInput = '0';
             }
             operator = button.getAttribute('data-operator');
         });
     });

     // Handle equals button
     const equalsButton = document.getElementById('equals');
     equalsButton.addEventListener('click', () => {
         if (prevInput !== '') {
             result = operate(prevInput, currentInput, operator);
             currentInput = result.toString();
             prevInput = '';
             operator = '';
             updateDisplay();
         }
     });

     // Function to perform basic operations
     function operate(num1, num2, operator) {
         num1 = parseFloat(num1);
         num2 = parseFloat(num2);
         switch (operator) {
             case '+':
                 return num1 + num2;
             case '-':
                 return num1 - num2;
             case '*':
                 return num1 * num2;
             case '/':
                 if (num2 === 0) {
                     alert("Cannot divide by zero!");
                     return 'Error';
                 }
                 return num1 / num2;
             default:
                 return num2;
         }
     }

     // Handle clear button
     const clearButton = document.getElementById('clear');
     clearButton.addEventListener('click', () => {
         currentInput = '0';
         prevInput = '';
         operator = '';
         updateDisplay();
     });

     // Handle backspace button
     const backspaceButton = document.getElementById('backspace');
     backspaceButton.addEventListener('click', () => {
         if (currentInput.length === 1) {
             currentInput = '0';
         } else {
             currentInput = currentInput.slice(0, -1);
         }
         updateDisplay();
     });

     // Handle decimal button
     const decimalButton = document.getElementById('decimal');
     decimalButton.addEventListener('click', () => {
         if (!currentInput.includes('.')) {
             currentInput += '.';
             updateDisplay();
         }
     });

     // Initialize the display
     updateDisplay();