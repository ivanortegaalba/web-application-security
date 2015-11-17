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
