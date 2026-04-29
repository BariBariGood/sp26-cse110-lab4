# DevTools Part 2

1. The bug was that the program was adding two strings instead of two numbers. The values from `document.getElementById("num1").value` and `document.getElementById("num2").value` are strings, so `num1 + num2` performs string concatenation. With the default inputs, the program shows `23` instead of `5`.

2. I would fix it by converting both input values to numbers before adding them:

```js
function calculateSum(num1, num2) {
  let result = Number(num1) + Number(num2);
  return result;
}
```

This makes the `+` operator perform numeric addition instead of string concatenation.
