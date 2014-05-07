mover.js
========

Lightweight simple Jquery utility to enable faster development of moveable elements based on media breakpoints.

Dependencies: enquire.js jquery 

How to:

Add jquery
Add enquire.js
Add mover.js     <script src="Scripts/mover.js"></script>


Add the class "to-move" to all elements you want moved

Add data tag 'data-move-[inser min screen width here]'="[enter div placeholder ID here]" for each breakpoint needed. 

(example: data-move-786="content1" will move this element to element 'content1' when the screen / device width is greater than 786)


DONE!

div data-move-1024="content3" data-move-786="header" data-move-480="content5" data-move-0="content1" class="to-move">Hi</div
  
div data-move-1024="content4" data-move-786="footer" data-move-480="content6" data-move-0="content2" class="to-move">Bye</div

    <div ID="header"></div>
    <div ID="footer"></div>
    <div ID="content1"></div>
    <div ID="content2"></div>
    <div ID="content3"></div>
    <div ID="content4"></div>
    <div ID="content5"></div>
    <div ID="content6"></div>
    





Breakpoints can be adjusted in the mover.js very easily.  
