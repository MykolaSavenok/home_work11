'use strict';
const number = +prompt('Введіть число');
const power = +prompt('Введіть сутпінь');
const result = pow(Number(number), Number(power));

function pow(num, degree) {

   if (num < 0 || power < 0 || isNaN(num) || isNaN(power) || !Number.isInteger(num) || !Number.isInteger(power)) {
      return 'invalid value!';
   }
   if (degree === 0) {
      return 1;
   }
   return num * pow(num, degree - 1)
}

console.log(result)




