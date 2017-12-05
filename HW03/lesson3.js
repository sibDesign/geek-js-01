console.log("============= Задача 1");
var i = 1, string="Простые числа: ";
while(i<=100) {
  var n=i, z=0;
  while(1<(n)) {
    n--;
    if((i%n)==0) {z++}
  }
  if ((z<2)&(i>1)) {
    string += i +  ", ";
  }
  i++;
}
console.log(string);

console.log("============= Задача 2");
n=0;
do {if (n==0) {console.log(n,"- это ноль")}
    else if((n%2)==0) {console.log(n,"- это чётное число")}
    else {console.log(n,"- это нечётное число")}
    n++;
} while(n<10);

console.log("============= Задача 3");
for(var i=0; i<10; console.log(i++)) {}

console.log("============= Задача 4");
n=1; 
while(n<=20) {
  mystring = "";
  i=1;
  while(i<=n) {
    mystring += "*";
    i++}
  console.log(mystring);
  n++;
}