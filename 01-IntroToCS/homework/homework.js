'use strict';

function BinarioADecimal(num) {
   let decimal = 0;

   for (let i = 0; i<num.length; i++) {
      decimal += +num[i]*2**(num.length-1-i);
   }
   return decimal;
   
}

function DecimalABinario(num) {
  let binario =''; let resta = 0;
  
  while (num>=2){
   resta = num%2;
   num = Math.trunc(num/2); 
   binario += +resta.toString();
  }
  binario += num.toString();
  return binario.split('').reverse().join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
