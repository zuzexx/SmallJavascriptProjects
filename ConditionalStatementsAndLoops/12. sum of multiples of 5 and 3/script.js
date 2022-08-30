let text = document.getElementById("text");
let sum = 0;

for (let i = 0; i<1000; i++){
    if(i%3===0 || i%5===0){
        sum += i;
    }
}
text.textContent = `the sum of multples of 3 and 5 is ${sum}`