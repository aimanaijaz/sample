var work{
	"jobs" : [ {
	"employer" : " SWCET",
	"title" : " Asst Professor",
	"location": " Hyderabad",
	"dates": " June 2012 to April 2013",
	"description"  : "Worked as an Assistant Professor. I worked at SWCET for two semesters. I taught Mathematical Foundations of Computer to second year students. I also took Computer Networks and Operating Systems Lab for third year students. In my second semester I taught Web Technologies to third year students. "
	},
	{
	"employer" : " Ayaan",
	"title" : " Asst Professor",
	"location": " Hyderabad",
	"dates": " July 2010 to November 2010",
	"description" : "Worked as an Assistant Professor. Worked here for a semester. Taught Advanced Data Structures to second year students."
	} ]

}

var projects{
	"projects" : [ {
	"title" : " Database Intrusion Detection and Response System",
	"dates" : " December 2011 to April 2012",
	"description": " Blah Blah",
	"images": ["image1.jpg", "image2.jpg"] 
	},
	{
	"title" : " Scalable Web Counselling Application",
	"dates" : " December 2009 to April 2010",
	"description": " Blah Blah",
	"images":  ["image1.jpg", "image2.jpg"] 
	},
	{
	"title" : " Employee Tracking System",
	"dates" : " May 2009 to June 2009",
	"description": " Blah Blah",
	"images": ["image1.jpg", "image2.jpg"] 
	} ]

}

var bio{

  "name" : "Aiman", 
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
  ]
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

var education{
	"schools" : [ {
	"name" : " Indian School Salalah",
	"location" : " Salalah",
	"degree": " AISSE",
	"majors" : " Science", 
	"dates": " 1992 - 2004",
	"url" : "http://www.indianschoolsalalah.com" 
	},
	{
	"name" : " St. Ann's Junior College",
	"location" : " Hyderabad",
	"degree" : "BIE",
	"majors": ["Maths", "Physcis", "Chemistry"], 
	"years": " 2004-2006",
	"url" : "http://www.stannscollegehyd.com" 
	},
	{
	"name" : " SWCET",
	"location" : " Hyderabad",
	"degree": " B.Tech",
	"majors" : " IT", 
	"years": " 2006-2010",
	"url" : "http://www.swcet.in" 
	},
	{
	"name" : " SWCET",
	"city" : " Hyderabad",
	"degree": " M.Tech",
	"majors": " Computer Science", 
	"years": " 2010 - 2012",
	"url" : " http://www.swcet.in " 
	} ],

	"onlinecourses" : [ {
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"dates" : "25th Sept to 2nd October",
		"url" : "http://www.udacity.com"
	},
	{
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"dates" : "2ndth Sept to 10th October",
		"url" : "http://www.udacity.com"

	}
	]

}


















