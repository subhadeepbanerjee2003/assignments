## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

### code -->

```function countUp(start, end, delay) {
console.log(start);

if (start < end) {
setTimeout(function() {
countUp(start + 1, end, delay);
}, delay);
}
}

// Example: Count from 1 to 5 with a delay of 1000 milliseconds (1 second)
countUp(1, 5, 1000);

(Hint: setTimeout)

```
