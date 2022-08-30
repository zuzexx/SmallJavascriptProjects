Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

## Solution:
The solution requires just a simple if sentence. If the year is evenly divisible by 4, but not by 100, then it is a leap year or if it is evenly divisible by 4, 100 and 400. Otherwise it is a common year.


## Final code:

### HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main>
        <div id ="words"></div>
    </main>
</body>
<script src="leapYear.js"></script>
</html>

```


### JavaScript
```
let words = document.getElementById("words")
let year = 2001;

if(year%4===0 && year%100!==0){
    words.textContent = `The year ${year} is a leap year`
} else if (year%4===0 && year%100===0 && year%400 ===0){
    words.textContent = `The year ${year} is a leap year`
}else{
    words.textContent = `The year ${year} is not a leap year`
}
```
