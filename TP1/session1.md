#Introduction to Web Programming

```
Slides: [http://www-sop.inria.fr/members/Tamara.Rezk/teaching/caspar/web15.tar.gz](http://www-sop.inria.fr/members/Tamara.Rezk/teaching/caspar/web15.tar.gz)
```

# What is the OWASP Top 10?
**[OWASP](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)**: The OWASP Top 10 provides _A list of the 10 Most Critical Web Application Security Risks_.

And for each Risk it provides:
- A description
- Example vulnerabilities
- Example attacks
- Guidance on how to avoid
- References to OWASP and other related resources

##Evolution of the web Grafical view [here](http://evolutionoftheweb.com).
1. 1990 _Static Web_
2. 1995 _Dynamic web_
3. 2000 _Web 2.0_

##Security requirement
- Availability: A service or resource is made unavailability.
- Confidentiality:Unauthorized disclosure of data.
- Integrity: Unauthorized modification of data and unauthorized execution of programs.

> TASK [1]: **try hello2.php which a example about variable in URL**

> [2]: **[http://validator.w3.org](http://validator.w3.org)**

# 1990: The static web 1.0
The server only dispose of statics webs in HTML. The Server use the protocol HTTP to response the client request.

## HTTP: HyperText Transfer Protocol.
This protocol no save the state, so the server don't know who is responsable of request. The server only respond the request indifferently that who do it. Then, each request is independet.

The parameter of transaction are in HTTP header. All the information about the request is in header. For example:

```
    GET /index.html HTTP/1.1
    Host: www.domain.com
    User-Agent: Mozilla/5.0
    Accept: text/html,*/*
    Accept-Language: en-us,en;q=0.5
    Accept-Charset: ISO-8859-1,utf-8
    Connection: keep-alive

    [BODY]
```

Te response is similar, all the information about the response is in the header. And the information requested is in body. For example:

```
    HTTP/1.x 200 OK
    Date: Sat, 28 Nov 2009 04:36:25 GMT
    Server: Apache-Coyote/1.1
    Content-Type: text/html; charset=UTF-8
    Content-Length: 1846


    [BODY]<html>...</html>
```

###Phishing attack

This attack tricks user using similar page that the user expects to find.

For example, if the user want to use Paypal, the user make a mistake and use Paypal. A hacker, can use this usual error to deceive the user so the user think is the correct page.

This page use the same interface and request the password account of Paypal. The user, think is correct and are logged. This page, take this information and use to original Paypal.

This attack can happen from Email, where the attacker use the other identity, for example service@paypal.com.

All types of phishing is based in cheat the user with the original page that the user expect.

# How keep state information on session.
- In URL
- Hidden HTML

> TASK[3]: **Example for attack in hiddenAtack.html**

- Cookies:
- Used for the most visited pages(Google, Facebook, etc).
- Its a file in the hard disk created for the server code in your browser.

Cookies are useful for:
- Authentication
- Personalization
- Tracking

**ONLY THE SITE THAT CREATE THE COOKIE CAN READ IT**

A way to do an attack, is use the same cookie of the client. The hacker can use the cookie to access the personal data user.

A way to protect this attack is protect the cookie by cryptography(MAC for example).

> TASK[4]: **Try the example about cookie security Example cookie.php/2**

# JavaScript
> TASK[5]: **All scripts will share the memory  (see memory.html)**

## Windows property
> The most important property to protect is "windows" option.

If the hacker accede to this option, the hacker will has access all data. Included the cookies. This cookies permits the access at server.

## DOM
> P-> root B-> a children objet _Note: is a diagram about functionament of JavaScript DOM access_

## AJAX
## Mashups
> Page that included code from another servers. _Note: Search more information about_

> TASK[6]: **simplemashup.html and look at: [http://www.programmable.com](http://www.programmable.com)**

# Conclusion TASKS:
1. Intall Apache and Firebug.
2. Use  the file authentication.php together with a Base64 Decoder  to find the password of the authentication
3. Go though all examples cited in the slides and execute the code. Write a paragraph explaining what happens during execution.
4. Modify formAttack.html and write a price.php file that sets a cookie (lasting for 7 days) for the price.
- Write a html page displaying a link (for example www.bnpparibas.fr) but hiding a phishing attack.
  1. How can the user prevent this attack?
  2. How can the programmer prevent this attack?

- Write a second service that confirms the transaction to the client. Modify the value of the cookie in price.php from the CLIENT side and confirm the transaction with the server.
5. Add a hash to the price in the cookie, so the client cannot modify it. Modify the service of the transaction accordingly, how can the client change the price?
