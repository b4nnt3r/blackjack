/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
let hand = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function handValue(hand) {
    return hand.reduce(function(s, v) {
      return s + v;
    });

}





// function setAll(a, v) {
//     var i, n = a.length;
//     for (i = 0; i < n; ++i) {
//         a[i] = v;
//     }
// }
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
