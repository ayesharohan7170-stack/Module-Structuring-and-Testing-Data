## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?

console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?
<!-- console is a built-in object in JavaScript that holds tools for showing messages while you code. -->
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
<!-- log means “show this.” -->
<!-- assert means “I expect this to be true. Tell me only if I’m wrong.” -->
<!-- The . (dot) means “get something that belongs to this object.” -->
<!-- It connects an object on the left to a thing inside it on the right. -->

<!-- Two methods for console object -->
console.warn() → Displays a warning.
console.debug() → Used to log debugging information. 