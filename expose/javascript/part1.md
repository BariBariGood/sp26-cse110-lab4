# Part 1

## var declaration

1. Line 9 prints `values added: 20`. The variable `result` is declared with `var`, assigned `0`, then reassigned to `num1 + num2`, which is `10 + 10`.

2. Line 13 prints `final result: 20`. `var` is function-scoped, so `result` is still accessible after the `if` block ends.

3. You should avoid `var` because it is function-scoped rather than block-scoped, which can cause variables to be accessible in places you do not expect. It is also hoisted, which can make bugs harder to notice and understand.

## let declaration

4. Line 9 prints `values added: 20`. The variable `result` is declared inside the `if` block with `let`, then reassigned to `10 + 10`.

5. Line 13 causes a `ReferenceError`. `let` is block-scoped, so `result` only exists inside the `if` block where it was declared.

## const declaration

6. Line 9 is never reached because line 7 causes a `TypeError: Assignment to constant variable`. The code declares `result` with `const` and then tries to reassign it.

7. Line 13 is never reached because the function stops when line 7 throws the `TypeError`. If execution somehow reached line 13, `result` would also be out of scope because `const` is block-scoped.
