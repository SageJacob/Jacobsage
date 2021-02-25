let button_names = ["Resume", "GitHub", "Linkedin"];
let links = ["jacobsage.com/Resume.pdf", "github.com/sagejacob", "linkedin.com/in/jacob-sage/"];
let colors = ["#4CAF50", "#008CBA", "#FC8267"];

function makeButtons() {
    let btn;
    let background = "#313131";
    let screenHeight = String(window.screen.height) + "px;";
    let screenWidth = window.screen.width;
    let head = document.getElementById("buttons");
    head.style.height = screenHeight;
    head.innerHTML = "";
    let anchor;
    for (let i = 0; i < button_names.length; i++) {
        anchor = document.createElement("a");
        anchor.target = "_blank";
        anchor.href = "https://www." + links[i];
        anchor.rel = "noopener noreferrer";
        anchor.className = "link";
        btn = document.createElement("button");
        btn.id = "button" + String(i + 1);
        btn.className = "button";
        btn.style = "display: inline; margin-right: 10px; positiion: relative; font-size: 150%; border: 2px solid " + String(colors[i]) + ";";
        btn.style.height = "20%";
        btn.onmouseenter = function() {
            this.style.backgroundColor = colors[i]; 
            this.style.color = "black";
        };
        btn.onmouseleave = function() { 
            this.style.backgroundColor = background; 
            this.style.color = "white";
        };
        //btn.onclick = function () { window.location.href = "https://www." + links[i]; };
        console.log(btn.onclick);
        btn.innerText = button_names[i];
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