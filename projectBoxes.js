//Text for the about section
const descText = 
`Hi! I'm Quinton, a first year Mathematics student at the University of Waterloo.
I'm excited to learn more about math and computer science in the coming years. 
Other than that, some of my hobbies include chess and badminton!`

//Retrieve the description element
const description = document.createElement("p");
description.innerHTML = descText;
const desc = document.querySelector(".description");
desc.prepend(description);


//Template literal for projects section
let projectBoxTemplate = `
    
        <div class="projectTitle"> </div>
        <div class="projectContent"> 
            <p class="desc" style = "font-size: 120%">  
            </p>
            <picture class = "gameThumbnail">
                <img alt=""> </img>
            </picture>
            <div class="projectButtons" style="text-align: center; zoom: 1.1;"> 
                <a class="button runButton is-primary" target="blank">
                    Open Project
                </a>
                <a class="button sourceButton is-primary" target="blank">
                    Source Code
                </a>
            </div>
        </div>    
   `;

class projectBox {
    constructor(
    name,
    desc,
    linkDict,
    ){
        //Set properties
        this.name = name;
        this.desc = desc;
        this.linkDict = linkDict; // link dictionary

        //Create template literal
        this.mainBox = document.createElement("li");
        this.mainBox.innerHTML = projectBoxTemplate;
        //Add the title
        this.mainBox.querySelector(".projectTitle").innerText = name;
        //Add the source
        this.mainBox.querySelector("img").setAttribute("src", linkDict.imageLink);
        //Add the description
        this.mainBox.querySelector(".desc").innerText = desc;
        //Set buttons
        this.mainBox.querySelector(".runButton").setAttribute("href", linkDict.projectLink);
        this.mainBox.querySelector(".sourceButton").setAttribute("href", linkDict.sourceLink);

        //Set the collapsible "dropdown"
        let coll = this.mainBox.querySelector(".projectTitle");
        let content = this.mainBox.querySelector(".projectContent");
        this.open = () => {
            coll.classList.add("active");
            content.style.maxHeight = (content.scrollHeight + 80) + "px";
            content.style.padding = "40px";
        };
        this.close = () => {
            coll.classList.remove("active");
            content.style.maxHeight = null;
            content.style.padding = "0px 40px";
        };
            
        
        coll.addEventListener("click", () => {
            projectBoxes.forEach((e) => {
                if (e != this) e.close();
            })
            if (content.style.maxHeight) {
                this.close()
            } else {
              this.open()
            }
            console.log("clicked")
        })

    }
}

//Create the projectBoxes, put them in an array
let projectBoxes = [];
projectBoxes.push(new projectBox(
    "The Quest for Xommuria",
    "The player embarks on an adventure to defend the Kingdom of Xommuria! Battle dangerous enemies, defeat powerful bosses, and uncover the secrets that lie ahead! This game was made in Greenfoot, a Java IDE. ",
    {
        projectLink: "https://www.greenfoot.org/scenarios/25228",
        imageLink: "Images/quest_for_xommuria_thumbnail.jpg",
        sourceLink: "https://github.com/QuintonMak/The-Quest-For-Xommuria",
    } 
))
projectBoxes.push(new projectBox(
    "Cosmic Resistance",
    "The base is being invaded and you are the last line of defense! Place towers and hold off the enemy for as long as possible! This game was made in Greenfoot, a Java IDE.",
    {
        imageLink: "Images/cosmic_resistance_thumbnail.jpg",
        sourceLink: "https://github.com/QuintonMak/Cosmic-Resistance-Tower-Defense",
        projectLink: "https://www.greenfoot.org/scenarios/28209",
    }
))
projectBoxes.push(new projectBox(
    "Armatech",
    "In the year 2072 you work for a robotics company called Armatech. However, you know that this coorporation has a dark history. You must deal with battling various enemies, while having to deal with the past. This project was made in Unity, using C#.",
    {
        projectLink: "Armatech.html",
        imageLink: "Images/armatech_thumbnail.jpg",
        sourceLink: "https://github.com/QuintonMak/Armatech",
    }
))
projectBoxes.push(new projectBox(
    "Wordle",
    "Wordle is a recently popular word game where the goal is to guess a secret 5-letter word in 6 or less tries. Made in Unity using C#.",
    {
        projectLink: "Wordle.html",
        imageLink: "Images/wordle_thumbnail.jpg",
        sourceLink: "https://github.com/QuintonMak/Wordle-Clone",
    }
))
projectBoxes.push(new projectBox(
    "Geodude",
    `Geodude is a Discord bot that plays Geoguessr with the user. Submitted for the HackHacks 2022 hackathon where we won the Best Discord Bot award. 
    Made using Python and the discord.py and google-streetview.api and googlemaps libraries, and a small amount of pandas/SQL.`,
    {
        projectLink: "https://devpost.com/software/hawkhacks-22-submission-placeholder",
        imageLink: "Images/hawkhacks_icon.png",
        sourceLink: "https://github.com/AaryanRawat/HawkHacks2022Project",
    }
))



//Add in the project "boxes"
const projects = document.querySelector("#projects ul");
projectBoxes.forEach((element) => {
    projects.append(element.mainBox);
})



//Top margins for main element
let main = document.querySelector(".main");
const resizeMain = () => {
    let menuBar = document.querySelector(".menu");
    let menuHeight = getComputedStyle(menuBar).height;
    main.style.marginTop = menuHeight;
}
window.addEventListener("resize", resizeMain);
window.addEventListener("load", resizeMain);
