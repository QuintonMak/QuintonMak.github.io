
//From: https://andylangton.co.uk/blog/development/get-viewportwindow-size-width-and-height-javascript
//Get the viewport width and height in px
 var viewportwidth;
 var viewportheight;
  
 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
 if (typeof window.innerWidth != 'undefined')
 {
      viewportwidth = window.innerWidth,
      viewportheight = window.innerHeight
 }
// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
 else if (typeof document.documentElement != 'undefined'
     && typeof document.documentElement.clientWidth !=
     'undefined' && document.documentElement.clientWidth != 0)
 {
       viewportwidth = document.documentElement.clientWidth,
       viewportheight = document.documentElement.clientHeight
 }
 // older versions of IE
 else
 {
       viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
       viewportheight = document.getElementsByTagName('body')[0].clientHeight
 }


//Toggle whether to show the game (Armatech) based on screen size
//For now, this doesn't work if user toggles screen size!
const gameContainer = document.querySelector(".gameContainer");
const innerGameContainer = document.createElement("div");
var game;

if(viewportwidth>=820 && viewportheight>=510){
    game =  `<iframe src="Media/WebGL - Armatech/index.html" 
            id="armatech" name="armatech" allowfullscreen=true >
            </iframe>`;
}
else{
    game = `The screen is too small to display the game`;
}
innerGameContainer.innerHTML = game;
gameContainer.append(innerGameContainer)






