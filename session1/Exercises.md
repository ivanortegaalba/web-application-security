# Presentation
if i want to do my intership in INRIA i need to speak with Tamara before November.

Presentations:http://www-sop.inria.fr/members/Tamara.Rezk/teaching/caspar/web15.tar.gz

email: tamara.rezk@inria.fr

Exam:
- TPs
- CM
- OWASP 

In the exam there are exercises about practice. I can send the practise to teacher to see if correct.

#Introduction
**OWASP** -> I can view top-ten web vulnerabilities.

evolutionoftheweb.com -> to view the evolution of web. Form Static WEB until web 2.0

**security problems**
- Aviability
- confidentiality
- integrity

```
TASK: try hello2.php which a example about variable in URL
```
```
TASK: http://validator.w3.org
```

## How keep state information on session.
- In URL
- Hidden HTML
```
TASK Example for attack in hiddenAtack.html
```
- Cookies:
Used for the most visited pages(Google, Facebook, etc).
Its a file in the hard disk created for the server code in your browser.

Cookies are useful for:
- 	Aunthetication
- 	Personalitation
- 	Tracking

**ONLY THE SITE THAT CREATE THE COOKIE CAN READ IT**

A way to do an attack, is use the same cookie of the client. The hacker can use the cookie to access the personal data user.

A way to protect this attack is protect the cookie by cryptography(MAC for example).
```
TASK: Try the example about cookie security
```
## JavaScript
### Windows property
The most important property to protect is “windows” option.
If the hacker accede to this option, the hacker will has access all data. Included the cookies. This cookies permits the access at server.
### DOM
P-> root
B-> a children objet
*Note: is a diagram about functionament of JavaScript DOM access*
### AJAX
### Mashups
Page that included code from another servers.
*Note: Search more information about*
```
TASK: simplemashup.html
```
```
TASK: look at: http://www.programmable.com
```

## Conclusion TASKS:

- [ ] Intall Apache and Firebug.
- [ ] Use  the file authentication.php together with a Base64 Decoder  to find the password of the authentication
- [ ] Go though all examples cited in the slides and execute the code. Write a paragraph explaining what happens during execution.
- [ ] Modify formAttack.html and write a price.php file that sets a cookie (lasting for 7 days) for the price.
- [ ] Write a html page displaying a link (for example www.bnpparibas.fr) but hiding a phishing attack.
- 	[ ] How can the user prevent this attack?
- 	[ ] How can the programmer prevent this attack?
Write a second service that confirms the transaction to the client. Modify the value of the cookie in price.php from the CLIENT side and confirm the transaction with the server.
- [ ] Add a hash to the price in the cookie, so the client cannot modify it. Modify the service of the transaction accordingly, how can the client change the price?
