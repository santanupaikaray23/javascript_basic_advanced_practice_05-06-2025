var > We are able to redeclare and reassign
let > We can't redeclare but we can reassign
const >we neigher redeclare but nor reassign

> var a = 10
undefined
> a
10
> var a = 12
undefined
> a
12
> let a =34
Uncaught SyntaxError: Identifier 'a' has already been declared
> a
12
> a = 56
56
> a
56
> let a = 67
Uncaught SyntaxError: Identifier 'a' has already been declared
> a = 456
456
> a
456
> const c = 34
undefined
> c
34
> const c = 456
Uncaught SyntaxError: Identifier 'c' has already been declared
> c
34
>  let b = 20
undefined
> b
20
> b = 21
21
> b
21
> let b = 45
Uncaught SyntaxError: Identifier 'b' has already been declared
> const  c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c
34
> const c = 56
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 56
Uncaught TypeError: Assignment to constant variable.
> c = 67
Uncaught TypeError: Assignment to constant variable.
> d = 67
67


