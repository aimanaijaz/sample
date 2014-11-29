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

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<a href='#'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p>";



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

