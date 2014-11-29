var bio = 
{ "name" : "Aiman", 
  "role" : "Web Developer" , 
  "contacts" : {
  "mobile" : "845-616-5630",
  "email"  : "aims4success@gmail.com",
  "github" : "aimanaijaz",
  "twitter" : "Aiman",
  "location" : "New York"
  },
  "welcomeMessage" : "lorem ipsum dolor sit amet etc etc",
  "skills" : [ 
  "awesomeness",  "Programming" , "Teaching" , "JS"
  ],
  "bioPic" : "images/aiman.jpg"
}

var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";

if(bio.skills.length > 0){
$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
}

