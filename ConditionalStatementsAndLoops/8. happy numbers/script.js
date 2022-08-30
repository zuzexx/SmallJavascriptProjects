let text = document.getElementById("text");

function happy_number(num) 
{
    var a, b ;
    var c = [] ;
 
    while(num != 1 && c[num] !== true) 
    {
        c[num] = true ;
        a = 0 ;
        while (num > 0) {
            b = num % 10 ;
            a += b * b ;
            num = (num  - b) / 10 ;
        }
        num = a ;
    }
    return (num == 1) ;
}
 
var cnt = 5;
var num = 1;
var f5 = ''; 
while(cnt-- > 0) 
{
    while(!happy_number(num))
        num++ ;
f5 = f5+(num + ", ") ;

    num++ ;
}
text.textContent=`First 5 happy numbers are : ${f5}`