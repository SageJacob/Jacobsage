let button_names = ["Resume", "GitHub", "Linkedin"];
let links = ["jacobsage.com/Resume.pdf", "github.com/sagejacob", "linkedin.com/in/jacob-sage/"];
let colors = ["#FC8267",  "#6eeb83",  "#589AFF"];
let background = "#313131";

function formatAnchor(anchor, i) {
    anchor.target = "_blank";
    anchor.href = "https://www." + links[i];
    anchor.rel = "noopener noreferrer";
    anchor.className = "link";
    return anchor;
}

function formatButton(btn, i) {
    btn.id = "button" + String(i + 1);
    btn.className = "button";
    btn.style.border =  "2px solid " + String(colors[i]);
    btn.style.height = "20%";
    btn.onmouseenter = function() {
        this.style.backgroundColor = colors[i]; 
        this.style.color = "black";
    };
    btn.onmouseleave = function() { 
        this.style.backgroundColor = background; 
        this.style.color = "white";
    };
    btn.innerText = button_names[i];
    if (i == 1) {
        btn.style.marginRight = "10px";
        btn.style.marginLeft = "10px";
    }
    return btn;
}

function makeButtons() {
    let btn;
    let screenHeight = String(window.screen.height) + "px;";
    let screenWidth = window.screen.width;
    let head = document.getElementById("buttons");
    head.style.height = screenHeight;
    head.innerHTML = "";
    let anchor;
    for (let i = 0; i < button_names.length; i++) {
        anchor =    document.createElement("a");
        btn =       document.createElement("button");
        anchor =    formatAnchor(anchor, i);
        btn =       formatButton(btn, i);
        anchor.appendChild(btn);
        head.appendChild(anchor);
        if (screenWidth < 500) {
            btn.style.marginLeft = "5%";
            btn.style.width = "80%";
            btn.style.marginBottom = "10px";
            head.appendChild(document.createElement("br"));
        }
        else
            btn.style.marginBottom = "0px";
    }  
}