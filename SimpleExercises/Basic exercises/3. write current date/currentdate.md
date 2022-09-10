Write a JavaScript program to print the contents of the current window.

### Solution - Javascript:
I have written some simle HTML and the vent straight to the JavaScript. at first I have writen: 

```
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

console.log(`Curent date is: ${day} / ${month} / ${year}`);
```

