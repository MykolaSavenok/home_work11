'use strict';
function pow(num, degree) {
   if (degree === 0) {
      return 1;
   }
   return num * pow(num, degree - 1)
}

const number = +prompt('Введіть число');
const power = +prompt('Введіть сутпінь');
const result = pow(Number(number), Number(power));

if (!number || !power || !Number.isInteger(number)) {
   console.log('Number no valid')
} else {
   console.log(result);
}




