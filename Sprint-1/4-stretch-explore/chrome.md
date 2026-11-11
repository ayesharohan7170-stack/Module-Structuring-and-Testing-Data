Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
<!-- Calling alert() displays a popup message on the screen. The user must click OK to close it.  -->

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?

<!-- Calling prompt() displays a popup asking the user to enter some text. -->
What is the return value of `prompt`?
<!-- The prompt() function returns the text entered by the user as a string.if I enter "Ayesha"
it stores that value in variable "myName" -->
<!-- diff between alert() and prompt -->
alert() displays a message to the user.

<!-- Example -->
alert("Good Luck!");
prompt() displays a message and an input field. The user can type a response and click OK, or click Cancel.

<!-- Example -->
let myName = prompt("What is your name?");
console.log(myName);    