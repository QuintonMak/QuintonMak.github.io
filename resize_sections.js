// get the divs to resize
let sections = document.querySelectorAll(".resize");
const minHeights = {};
// store the minimum height of each section. 
// key is the div object, value is the min height
sections.forEach((e) => {
    let height = getComputedStyle(e).height;
    let key = e.id;
    minHeights.key = parseInt(height);
    
});

// function to resize based on window size
const resizeFunc = (e) => {
    console.log(window.innerHeight);
    console.log(minHeights.e);
    let key = e.id;
    if (window.innerHeight > minHeights.key) {
        e.style.height = window.innerHeight + "px";
    } else {
        e.style.height = minHeights.key;
    }
}

// event listener to resize sections whenever the window size changes
window.addEventListener("resize", () => {
    console.log(minHeights);
    sections.forEach((element) => {
        resizeFunc(element);
    })
})
    

