function NumberOfSTeps(number) {
  if (number <= 0) {
    console.log(`Please use a number bigger than 0`);
  }
  let i = 0;
  for (i; number > 0; i++) {
    if (number % 2 == 0) {
      number /= 2;
    } else {
      number--;
    }
  }

  return i;
}
console.log(NumberOfSTeps(14));
