var bio = 
{ "name" : "Aiman Aijaz", 
  "role" : "Web Developer" , 
  "contacts" : {
  "mobile" : "845-616-5630",
  "email"  : "aims4success@gmail.com",
  "github" : "aimanaijaz",
  "twitter" : "Aiman Aijaz",
  "location" : "New York"
  },
  "welcomeMessage" : "My Resume",
  "skills" : [ 
  "Programming" , "Teaching" , "HTML" , "CSS"
  ],
  "bioPic" : "http://placehold.it/200x200"
}


bio.display = function() {

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedPic);
$("#header").append(formattedMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);

if(bio.skills.length > 0){
$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
}
}
bio.display();

var work = {
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

work.display = function() {

  for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

}
}

work.display();

var projects = {
  "projects" : [ {
  "title" : " Database Intrusion Detection and Response System",
  "dates" : " December 2011 to April 2012",
  "description": " I developed a website for web counseling and then deployed this website on am Amazon Elastic Computing Cloud (EC2). I have used Adobe Flex 3 for developing my website so as to make it more user friendly, interactive and dynamic. I have used java as my middleware technology and My SQL as the backend. After building the website an AMI was created and then it was deployed on an Amazon EC2 Cloud. Users could then access this website from the cloud",
  "images": ["images/DB1.jpg", "images/DB2.jpg"] 
  },
  {
  "title" : " Scalable Web Counselling Application",
  "dates" : " December 2009 to April 2010",
  "description": " I developed a website for web counseling and then deployed this website on am Amazon Elastic Computing Cloud (EC2). I have used Adobe Flex 3 for developing my website so as to make it more user friendly, interactive and dynamic. I have used java as my middleware technology and My SQL as the backend. After building the website an AMI was created and then it was deployed on an Amazon EC2 Cloud. Users could then access this website from the cloud",
  "images":  ["images/WC1.jpg", "images/WC2.jpg"] 
  },
  {
  "title" : " Employee Tracking System",
  "dates" : " May 2009 to June 2009",
  "description": " I developed a website for web counseling and then deployed this website on am Amazon Elastic Computing Cloud (EC2). I have used Adobe Flex 3 for developing my website so as to make it more user friendly, interactive and dynamic. I have used java as my middleware technology and My SQL as the backend. After building the website an AMI was created and then it was deployed on an Amazon EC2 Cloud. Users could then access this website from the cloud",
  "images": ["images/ETS1.jpg", "images/ETS2.jpg"] 
  } ]

}

projects.display = function() {
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length>0) {
      for(image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);

      }
    }
  }
}
projects.display();


var education = {
  "schools" : [ {
  "name" : " Indian School Salalah",
  "location" : " Salalah",
  "degree": " AISSE",
  "majors" : ["Maths", "Science"], 
  "dates": " 1992 - 2004",
  "url" : "http://www.indianschoolsalalah.com" 
  },
  {
  "name" : " St. Ann's Junior College",
  "location" : " Hyderabad",
  "degree" : "BIE",
  "majors": ["Maths", "Physcis", "Chemistry"], 
  "dates": " 2004-2006",
  "url" : "http://www.stannscollegehyd.com" 
  },
  {
  "name" : " SWCET",
  "location" : " Hyderabad",
  "degree": " B.Tech",
  "majors" : ["IT"], 
  "dates": " 2006-2010",
  "url" : "http://www.swcet.in" 
  },
  {
  "name" : " SWCET",
  "location" : " Hyderabad",
  "degree": " M.Tech",
  "majors": ["CS"], 
  "dates": " 2010 - 2012",
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
    "dates" : "2nd Oct to 10th October",
    "url" : "http://www.udacity.com"

  }
  ]

}

education.display = function() {
  for(school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

     if(education.schools[school].majors.length>0) {
      for(major in education.schools[school].majors) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedMajor);

      }
    }
  }

  $(".education-entry:last").append(HTMLonlineClasses);

  for(online in education.onlinecourses) {

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[online].title);
    $(".education-entry:last").append(formattedTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[online].school);
    $(".education-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlinecourses[online].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlinecourses[online].url);
    $(".education-entry:last").append(formattedURL); 
  }
}
education.display();


$("#mapDiv").append(googleMap);














