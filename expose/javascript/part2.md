# Part 2

## Variables and Scoping

1. Line 12 prints `3`. The `for` loop finishes after `i` becomes `3`, and because `i` was declared with `var`, it is function-scoped and still accessible after the loop.

2. Line 13 prints `150`. The final loop iteration uses `300 * (1 - 0.5)`, so `discountedPrice` becomes `150`. Because it was declared with `var`, it is still accessible after the loop.

3. Line 14 prints `150`. The final loop iteration stores the rounded discounted price for `300`, which is `150`. Because `finalPrice` was declared with `var`, it remains accessible after the loop.

4. The function returns `[50, 100, 150]`. Each price is multiplied by `1 - 0.5`, rounded to two decimal places, and pushed into the `discounted` array.

5. Line 12 causes a `ReferenceError`. The loop variable `i` was declared with `let`, so it only exists inside the `for` loop.

6. Line 13 causes a `ReferenceError`. `discountedPrice` was declared with `let` inside the loop body, so it is not accessible after the loop body ends.

7. Line 14 prints `150`. `finalPrice` was declared with `let` in the function body, so it is still available after the loop. Its last assigned value is from the final price, `300 * 0.5`.

8. The function returns `[50, 100, 150]`. The `let` declarations keep `i` and `discountedPrice` block-scoped, but the function still pushes each calculated final price into the `discounted` array.

9. Line 11 causes a `ReferenceError`. The variable `i` was declared with `let` inside the `for` loop, so it cannot be accessed outside that loop.

10. Line 12 prints `3`. `length` is declared with `const` in the function body, so it is available anywhere inside the function after declaration.

11. The function returns `[50, 100, 150]`. `discountedPrice` is declared with `const` inside each loop iteration, so it is recreated each time and pushed into the `discounted` array.

## Data Types

12. Given the `student` object:

A. `student.name`

B. `student['Grad Year']`

C. `student.greeting()`

D. `student['Favorite Teacher'].name`

E. `student.courseLoad[0]`

## Basic Operators and Type Conversion

13. Arithmetic:

A. `'3' + 2` gives `'32'` because `+` with a string performs string concatenation.

B. `'3' - 2` gives `1` because `-` converts the string `'3'` to the number `3`.

C. `3 + null` gives `3` because `null` converts to `0` in numeric addition.

D. `'3' + null` gives `'3null'` because `+` with a string performs string concatenation.

E. `true + 3` gives `4` because `true` converts to `1`.

F. `false + null` gives `0` because `false` converts to `0` and `null` converts to `0`.

G. `'3' + undefined` gives `'3undefined'` because `+` with a string performs string concatenation.

H. `'3' - undefined` gives `NaN` because `undefined` converts to `NaN` in numeric operations.

14. Comparison:

A. `'2' > 1` gives `true` because `'2'` is converted to the number `2`.

B. `'2' < '12'` gives `false` because both values are strings, so JavaScript compares them lexicographically. The first character `'2'` is greater than `'1'`.

C. `2 == '2'` gives `true` because `==` allows type coercion, so `'2'` is converted to `2`.

D. `2 === '2'` gives `false` because `===` requires both value and type to match.

E. `true == 2` gives `false` because `true` converts to `1`, and `1` is not equal to `2`.

F. `true === Boolean(2)` gives `true` because `Boolean(2)` is `true`, so both sides are the boolean value `true`.

15. `==` compares values after allowing type conversion, while `===` compares both value and type without converting either side. In general, `===` is safer because it avoids surprising results from automatic type coercion.

## Functions

17. The result is `[2, 4, 6]`. `modifyArray` loops through `[1, 2, 3]`, calls `doSomething` on each value, and pushes the returned value into a new array. Since `doSomething` returns `num * 2`, the values become `2`, `4`, and `6`.

## setInterval(), setTimeout(), clearTimeout()

19. The output is:

```text
1
4
3
2
```

`1` prints first because it is synchronous. The `setTimeout` for `2` is delayed by 1000 milliseconds. The `setTimeout` for `3` has a delay of 0, but it still waits until the current synchronous code finishes, so `4` prints before `3`.
