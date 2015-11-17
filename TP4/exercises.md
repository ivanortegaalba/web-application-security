#JavaScript Insecurity and Isolation

##Leaks via...
### This
When we use this into a function, and return "this", this is a reference to father, so this reference to the global object.
```
var  count=0;
function increment(inc) {
     var count=5;
    	if (inc == undefined)
	    {inc = 1;};
    	this.count += inc;
    	return this.count;
}
```
**this is bound to the global object**

####Caution
```
When a function that returns “this” is called as a function and not as a constructor, this is bound to the global object (window)
```
####Security problems
```
If a function that returns this is used by an attacker, the attacker has access to all resources in the page that are linked to window (in particular document and document.cookie)
```
###Scope
```
var x=3;
function foo (){console.log(x)};
```
If call foo();

If define another function into foo() JavaScript
create another scope object.When we try to use a var in scope object, the engine
search this var in current scope. If don't found the var search in the parent. Then, is scaling by tree until root scope, the global!
####Caution
```
When a variable is not local to the object, then JavaScript  mounts the scope chain to look for the variable (analogous detail for properties in the prototype chain).
```
####Security problem

- Integrity:
```
an attacker can write a variable higher up in the scope chain
```
- Confidentiality:
```
an attacker can read a variable higher up in the scope chain
```
###To String
```
lookup =
function(o, prop) {
	if (prop === “secretproperty") {
		return "unsafe!"; }
	else {
		return o[prop]; } }
```
If  prop is not a string, JavaScript invokes the .toString method to convert the value to a string
```
badObj =
	{toString:
		function () {
			return “secretproperty"}}

	lookup(window, badObj)

window[badObj]
window[{toString: …}]
window[{toS…: …}.toS… ()]
window[(function () …) ()]
window[“secretproperty"]
```
####Caution	 
In JavaScript o.f  is treated as -> o["f"]
####Security problem
Via the implicit invocation of toString, a property could evaluate to an undesirable choice of the attacker.

### Eval
The engine expect a function, if is not a function,
the engine call the eval property.
So we can execute code introducing the code as string.
```
var s = "alert('hello') ";
setTimeout(s, 1000);
```
####Caution
Eval  interprets any string as code

####Security problem:
If a string of the attacker gets to eval, attacker executes his code

###Navive functions
```
<script src=somecode.js></script>
</head>
<body>
<script>
function fac(x) {
    if (x <= 1) {
        return 1;
    }
    return x*fac(x-1);
}
r = fac(4);
s = "alert("+r+")"
setTimeout(s, 100)
</script>
```
If somecode.js have declared a function named s, this functions will be overwritten and setTimeout execute s whit the last value assigned.
####Important detail:
Native functions code can be rewritten

####Security problem:
If attacker rewrites code of native function, when trusted code calls a native function, it is executing code of attacker!
