function LeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return `The year ${year} is a leap year`;
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return `The year ${year} is a leap year`;
  } else {
    return `The year ${year} is not a leap year`;
  }
}

console.log(LeapYear(2010));
console.log(LeapYear(2001));
console.log(LeapYear(2100));
console.log(LeapYear(1910));
console.log(LeapYear(1901));
console.log(LeapYear(1904));
