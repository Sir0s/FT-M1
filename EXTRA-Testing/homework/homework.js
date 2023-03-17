const layout = [
    [
       { type: 'VIP', booked: false },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: false },
    ],
    [
       { type: 'NORMAL', booked: false },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: false },
       { type: 'NORMAL', booked: false },
    ],
    [
       { type: 'NORMAL', booked: false },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: false },
    ],
    [
       { type: 'ECONOMIC', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'ECONOMIC', booked: false },
    ],
    [
       { type: 'ECONOMIC', booked: false },
       { type: 'ECONOMIC', booked: true },
       { type: 'ECONOMIC', booked: false },
       { type: 'ECONOMIC', booked: false },
    ],
 ];
 function getRowNumber(letter){
    return (letter.charCodeAt(0) - 65);
    }

function checkSeatStatus(row, number) {
    if(typeof row !== 'string') throw new TypeError('First parameter is not a string');
    if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');
    return layout[getRowNumber(row)][number].booked
  }




// modulos
module.exports = {
  checkSeatStatus, 
  getRowNumber
}