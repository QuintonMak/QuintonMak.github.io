/**
 * A module for dealing with populating and resizing WebGL elements for a Unity Game 
 */

//From: https://andylangton.co.uk/blog/development/get-viewportwindow-size-width-and-height-javascript
//Get the viewport width and height in px

const getScreenDimensions = () => {
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

    return {viewportwidth, viewportheight};
 }

 //takes in a source (for webGL file) and a name (str) and returns a template literal that either contains an iframe or a string if the screen is too small
const setGameContainer = (source, name, dim, minw, minh) => {
    let game;
    getScreenDimensions();
    if(dim.viewportwidth>=minw && dim.viewportheight>=minh){
        game =  `<iframe src="${source}"
                id=${name} name=${name} allowfullscreen=true scrolling = "no">
                </iframe>`;
    }
    else{
        game = `The screen is too small to display the game`;
    }
    
    return game;
}

export {getScreenDimensions as getDim, setGameContainer as setGameContainer};
