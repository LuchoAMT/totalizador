function fizzbuzz(n) {
  let contador = 0
  if (n % 5 == 0 && n % 3 == 0)
  {
    return "FizzBuzz";
  }
  else if ( n % 5 == 0)
  {
    return "Buzz";
  }
  else if (n % 3 == 0)
  {
    return "Fizz";
  }
  return n+"";
}
export default fizzbuzz;