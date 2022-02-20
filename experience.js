//template for an experience point
const expTemplate = `
    <div class = "expDate"> </div>
    <div class = "expContent">
        <h2 class = "expTitle"> </h2>
        <h2 class = "expSubtitle"> </h2>
        <ul class = "expPointList"> </ul>
    </div>
    
    
`


class exp {
    constructor(title, subtitle, list, date) {
        this.title = title;
        this.subtitle = subtitle;
        this.list = list;
        this.date = date;
        //create container element
        this.container = document.createElement("li");
        this.container.classList.add("expContainer")
        this.container.innerHTML = expTemplate;
        //add title/subtitles
        this.container.querySelector(".expTitle").innerText = title;
        this.container.querySelector(".expSubtitle").innerText = subtitle;
        //add each element in list to the li element
        this.list.forEach((element) => {
            let pt = document.createElement("li");
            pt.innerText = element;
            this.container.querySelector(".expPointList").append(pt);
        });
        //add the date
        this.container.querySelector(".expDate").innerText = date;
    }
}

let expList = [];
expList.push(new exp("Pierre Elliott Trudeau High School", 
                    "Executive Member - Principia Science Club",
                    ["Planned and executed weekly activities in a team of 4 executive members.",
                    "Delivered presentations and demonstrations of scientific topics to 5-10 participants each week.",
                    "Facilitated the transition from in person to online meetings, retaining an 80% attendance rate."],
                    "September 2019 - June 2021"));

expList.push(new exp("Pierre Elliott Trudeau High School", 
                    "Peer Tutor - Isci Peer Tutoring Club",
                    ["Administered one-on-one tutoring sessions for an hour each.",
                     "Explained math and science topics that students struggled with or missed in class."],
                    "September 2019 - June 2021"));

expList.push(new exp("North York Chinese Baptist Church", 
                    "Summer Camp Counselor",
                    ["Worked with a team of 10-15 volunteers in a fast-paced environment.",
                     "Planned and supervised lessons and games for 10 - 20 children at a time.",
                    "Ensured a safe environment when the children played sports or games."],                    
                    "June 2017 - July 2019"));

expList.forEach((element) => {
    console.log(element.container);
    document.querySelector(".expList").append(element.container);
});