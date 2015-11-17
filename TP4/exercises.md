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
####Security problem
```
If a function that returns this is used by an attacker, the attacker has access to all resources in the page that are linked to window (in particular document and document.cookie)
```
