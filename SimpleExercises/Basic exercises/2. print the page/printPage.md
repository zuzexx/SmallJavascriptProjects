Write a JavaScript program to print the contents of the current window

***

### Solution:

I have written a simple paragraph and made a simple button in HTML. After that I defined a new variable `printPage` (button), so that I can add an event listener to it. The plan was to open the printing options when the user clicks the button. I was sure that JavaScript already has a method for that built in. After a quick google I found [w3schools article] (https://www.w3schools.com/jsref/met_win_print.asp), which was really helpful.


### Final code:

```
const printPage = document.getElementById("print-page")

printPage.addEventListener("click", function(){
    window.print()
})

```