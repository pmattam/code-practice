# Vowel Swap

vowelSwap function takes a string parameter as input, and returns an output string 
which is identical to the input with the following exceptions:

* All "a"'s have been replaced with "o"'s
* All "e"'s have been replaced with "a"'s
* All "i"'s have been replaced with "u"'s
* All "o"'s have been replaced with "i"'s
* All "u"'s have been replaced with "e"'s

Examples:

```js
> vowelSwap("To be or not to be")
"Ti ba ir nit ti ba"
```

```js
> vowelSwap("What the heck, dude?")
"Whot tha hack, deda?"
```

```js
> vowelSwap("I'm not sure you understand.")
"U'm nit sera yie endarstond."
```

There's a verify.js script which can be used to verify the answer.

```
cd ./vowel-swap
node verify.js
```
