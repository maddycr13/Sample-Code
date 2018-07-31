/* Write a function to print the n-the entry in the fibonacci series 
 * [0, 1, 1, 2, 3, 5, 8, 13, 21, 34,....]
 * for example fib(3) === 2 
 */

 /*iterative solution*/
function fib(n) {
  const result = [0,1];
  for (let i = 2; i <= n; i++) {
      const a = result[i - 1];
      const b = result[i - 2];
      result.push(a + b);
  }
  return result[n]; // to print the entire series of numbers or result[n] to print the nth  value
}
module.exports = fib;