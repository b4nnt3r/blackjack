/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

//acc is the accumulator that stores the val each time it is passed.
//the arrow function essentially replaces function(){} with some important exceptions.

// function handValue(hand) {
//   hand.reduce(acc, val, index) => {
//     hand = val !== NaN ? acc+ 1 : acc + 10 && acc > 21 ? acc-10 : acc;
//     console.log(hand);
//   }, 0);
// };
// if (a > b) {
//     result = x;
// } else {
//     result = y;
// }
//
// result = acc > 21 ? 1++: +10;


function handValue(hand) {
  let aceCount = 0;
  let result = hand.reduce((acc, val) => {
    if (val === 'K' || val === 'Q' || val === 'J') {
      return acc + 10;
    } else if (val === 'A') {
      aceCount++;
      return acc + 11;
    }
    return acc + parseInt(val);
  }, 0);
  for (aceCount; aceCount > 0 && result > 21; aceCount--) {
    result -= 10;
  }
  return result;
};

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
