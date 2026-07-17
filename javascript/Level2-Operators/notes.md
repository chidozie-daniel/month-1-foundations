Comparison operators make the program to start thinking.
== is called loose equality. javaScript tries to convert the values before comparing them.

=== is called strict equality
Strict equality checks:

Is the value the same?
Is the type the same?

Both must match.

Whenever I'm writing modern Javascript, I'm supposed to use ===(Strict equality)


Remember what !== means.

It asks:

Are the values different?
Are the types different?

---Logical operators allow you to combine multiple comparisons, to answer more than one question.

Think of AND like this:

To log into your university portal, you need:

Correct username
Correct password

If either one is wrong...

You don't get in.

Think of OR like this:

A website lets you log in with:

Google
OR GitHub

You only need one.

Think of NOT operator as a light switch
true

↓

!

↓

false


Real-World Example

Imagine a shopping website.

const isLoggedIn = true;
const hasPaymentMethod = true;

console.log(isLoggedIn && hasPaymentMethod);

If both are true...

The user can check out.


Progress so far:
✅ Variables
✅ Data Types
✅ typeof
✅ Arithmetic Operators
✅ Assignment Operators
✅ Comparison Operators
✅ Logical Operators