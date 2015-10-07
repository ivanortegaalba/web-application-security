Presentations: http://www-sop.inria.fr/members/Tamara.Rezk/teaching/caspar/was2.tar.gz

##Same Origin Policy (high level)

Need to complete.

##Frame isolation

In the navigation policy, the attacker can change another tabs and change a iframe in the page.

For example de bank In the windows policy, it is not possible change another tabs. But can change the same tabs a place in the page that use iframe. For example, gadget page.

##Fragment Identifier Messaging

This is when we send information by navigating a frame: www.example.com/#hello This method to communication no reload the page. No network traffic. it's not a security cannel: we can't secure the authentication

Correct way to use post message: ![](https://i.imgur.com/NRRda82.png)

##Cookie time

###Reading cookies on server (read SOP)

Its possible that happen the examples, if we use https, the cookie is secure.

###Client side read/write: document.cookie

This is possible, only, if the cookie not change with the http.

#### ABOUT OWASP

5 sites where: 2 use standard defense 2 not use standard defense 1 not common defense
