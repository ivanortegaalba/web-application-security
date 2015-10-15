# Conclusion TASKS:
- [X] Intall Apache and Firebug.
- [X] Use  the file authentication.php together with a Base64 Decoder  to find the password of the authentication
- [X] Go though all examples cited in the slides and execute the code. Write a paragraph explaining what happens during execution.
- [X] Modify formAttack.html and write a price.php file that sets a cookie (lasting for 7 days) for the price.
- [X] Write a html page displaying a link (for example www.bnpparibas.fr) but hiding a phishing attack.
  - [ ] How can the user prevent this attack?
  - [ ] How can the programmer prevent this attack?

- Write a second service that confirms the transaction to the client. Modify the value of the cookie in price.php from the CLIENT side and confirm the transaction with the server.
- [ ] Add a hash to the price in the cookie, so the client cannot modify it. Modify the service of the transaction accordingly, how can the client change the price?

## Use  the file authentication.php together with a Base64 Decoder  to find the password of the authentication
To execute the file, we have to put the file in "httdoc" directory. However, we use the explorer and input the login. Then we has to use Firebug to see the HTTP header because we are using the basic autentification so PHP put the information about the password in HTTP header.

![Password in header](https://i.imgur.com/dEuoDoa.png)

This information is transformed to base 64. Now, we can use Base64 Decoder to see the orgininal key.

![Base64 translated](https://i.imgur.com/V0WBg4O.png)

We can see the the user and password with the format:

```
user:password
```

So we can see that is a bad way to send the sensibility information on HTTP.

# ###Go though all examples cited in the slides and execute the code. Write a paragraph explaining what happens during execution
[1] ![Parameters URL](https://i.imgur.com/PoBeVBb.png) The parameters has introduced by url using variables with GET method. When you interact whit a link, this link use the variable associated to save this information in URL. This way to keep the information involve:
- Public information.
- Keep information by steps.
- Don't have the possibility to apply personalitation on the page.

--------------------------------------------------------------------------------

[2] This page permit to test the accessibility of the page according to the WC3 requirements.

To prove the page we will use a html with images, different marks and a bit text.

![Testing validator.w3.com ](https://i.imgur.com/pcE1NRb.png)

# In this case, we have one problem only. We should use the alt property in marks.
[3] **Example for attack in hiddenAtack.html**

![Cart with fail price](https://i.imgur.com/HQN2aeW.png)

We change the price simply. We can use the browser to change the hidden form, and we choose what price we want.

![Changing the price](https://i.imgur.com/U3okvgl.png)

--------------------------------------------------------------------------------

[4] **Try the example about cookie security Example cookie.php/2**

We choose the variable name, for example "IVAN" requesting cookie.php.

![calling cookie.php](https://i.imgur.com/THi4iOZ.png)

One cookie will be deprecated because have a time to be valid.

![Cookie 2 deprecated.](https://i.imgur.com/QcEqqm6.png)

The cookies are true if are down the same domain.

![Calling another page down the same domain.](https://i.imgur.com/QcEqqm6.png)

# The second cookie is expired.
[5] The JavaScript share memory. We can see it because we declare y in a document different that is executed. And the value is shared.

# ![Executing memory.html](https://i.imgur.com/CCOxd4q.png)
[6] **simplemashup.html**

We need to include a iframe in a html document. After, we search a mashup in programmable.com and search the author page. +

![searching the mashup](https://i.imgur.com/vcNoQYT.png)

Then, we download the file html and put the url in src attribute. If we execute the HTML file.

![simplemashup.html execution](https://i.imgur.com/ObS5UYT.png)

# Found!
## Modify formAttack.html and write a price.php file that sets a cookie (lasting for 7 days) for the price.
we can use the function:

```
setcookie("price", "2.00", time()+(60 * 60 * 24 * 7));
```

![The cookie is sended](https://i.imgur.com/otl0Ig3.png) We can see more details with "Cookie" option in Firebug.

![More details about price.php cookie.](https://i.imgur.com/PaKJ21d.png)

# And the price, is change by html editor, but the price is't modified.
## Write a html page displaying a link (for example www.bnpparibas.fr) but hiding a phishing attack.
To cheat the user, we need a page as equal as the original page. We will need to change code to change the form receiver.

In my example, i use the Unicaja web (www.unicaja.es): is a Spanish bank. We only need to upload the page to our domain, and our domain have to be similar. For example:

```
www.unicaha.es
```

We have based in keyword mistake.

Firstly we need a similar html file. For this, we have downloaded the originar html page. This page will have a lots error because don't find the images and gifs.

We has downloaded the necessary files and we has keep in another directory.

The fake page is this: ![phishing page builded](https://i.imgur.com/xS9B4YX.png)

After, we have to change the form, that the user will complete. My form code:

```
    document.write('<form name="datos" action="phishing-attack.php" method="POST">');
```

I only has need to change the action attribute of form to send the information to my server. I send the information to php file, to print by screen the form data. This is my php code:

```
    <?php
        echo "You are attacked with phishing attack. We can use your bank data </br>";
        echo "User: " . $_POST["user"] . "</br>";
        echo "Password: " . $_POST["clave"];
    ?>
```

We can see the result: ![The target attacked](https://i.imgur.com/ZJzNhxI.png)
