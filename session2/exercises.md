
Presentations: http://www-sop.inria.fr/members/Tamara.Rezk/teaching/caspar/was2.tar.gz

## Same Origin Policy (high level)

##Frame isolation
In the navigation policy, the ataker can change another tabs and change a iframe in the page.
For exameple de bank
In the windows policiy, it is not posible change another tabs. But can change the same tabs a place in the page that use iframe.
For example, gadget page.

## Fragment Identifier Messaging
This is when we send information by navigating a frame: www.example.com/#hello
This metod to comunication no reload the page. No network traffic.
it's not a security cannel: we can't secure the authentication

Correct way to use post message:
![](https://i.imgur.com/NRRda82.png)

##Cookie time
###Reading cookies on server   (read SOP)
Its posible that happen the examples, if we use https, the cookie is secure.

###Client side read/write:     document.cookie
this is posible, only, if the cookie not canghe whit the http.

#### ABOUT OWASP
5 sites where:
2 use standard defense
2 not use standard defense
1 not common defense
