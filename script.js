// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            let container = document.getElementById("container");
            let astronautCount = document.getElementById("astronautCount").innerHTML;
            //console.log(astronautCount+' start');
            astronautCount = 0;
            let allAstronauts = "";
            
            json.sort(function(a,b){
                return a.hoursInSpace-b.hoursInSpace;
            });
            for (astronaut of json) {
                let activeColor = 'black'
                astronautCount ++
                if (astronaut.active) {
                    activeColor = 'green'
                }
                allAstronauts += 
                    `<div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li> Active: <span  style = "color:${activeColor}">${astronaut.active}</span></li>
                                <li>Skills: ${astronaut.skills.join(", ")}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronaut.picture}">
                    </div>`;
                    
            }
            document.getElementById("astronautCount").innerHTML = `${astronautCount} astronauts on the team`;
            container.innerHTML += allAstronauts;
            console.log(astronautCount);
            
         
            
});

    });
    
}); 


