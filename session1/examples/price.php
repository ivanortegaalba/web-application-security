<html>
    <FORM METHOD=POST ACTION="http://www.dansie.net/cgi-bin/scripts/cart.pl">
    Black Leather purse with leather straps<BR>Price: $20.00<BR>
    <INPUT TYPE=HIDDEN NAME=name VALUE="Black leather purse">
    <INPUT TYPE=HIDDEN NAME=price VALUE="2.00">
        <?php
            setcookie("price", "2.00");
        ?>
    <INPUT TYPE=HIDDEN NAME=sh VALUE="1">
    <INPUT TYPE=HIDDEN NAME=img VALUE="purse.jpg">
    <INPUT TYPE=HIDDEN NAME=custom1 VALUE="Black leather purse
    with leather straps">
    <INPUT TYPE=SUBMIT NAME="add" VALUE="Put in Shopping Cart">
    </FORM>
</html>


setcookie("Cookie2", $name, time()+1);  /* expire in 1 second*/
