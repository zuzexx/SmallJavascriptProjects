const d = new Date();
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayWeek = weekDays[d.getDay()];
let time = d.getTime();

let seconds = d.getSeconds();
let minutes = d.getMinutes();
let hours = d.toLocaleString("en-US", { hour: "numeric", hour12: true });

console.log(`Today is ${dayWeek}`);
console.log(`Current time is ${hours}  : ${minutes} : ${seconds} `);
