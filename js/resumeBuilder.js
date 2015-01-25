// Build resume with JSON data
var bio = {
	"name" : "Matt Holloway",
	"role" : "Director of Engineering",
	"contacts" : {
		"mobile" : "650.380.0540",
		"email" : "hollowmatt@gmail.com",
		"github" : "hollowmatt",
		"twitter" : "hollowm",
		"location" : "Mountain View"
	},
	"welcomeMessage" : "Welcome to my resume.",
	"skills" : ["front", "back", "side"],
	"bioPic" : "images/matt.jpg",
	"display" : function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedName).append(formattedRole).append(formattedPic);
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "NOOK Media LLC",
			"title" : "Director of Engineering",
			"location" : "Palo Alto, CA",
			"dates" : "2012 - present",
			"description" : "Director of Engineering for NOOK.com and NOOK Press"
		},
		{
			"employer" : "FedEx",
			"title" : "Solutions Architect",
			"location" : "Pittsburgh, PA",
			"dates" : "2006 - 2011",
			"description" : "Architect and lead CPC and Sortation stuff"
		}
	],
	"display" : function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocDate = formattedLocation + formattedDate;
			$(".work-entry:last").append(formattedLocDate);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var education = {
	"schools" : [
		{
			"name" : "NAIT",
			"location" : "Edmonton",
			"degree" : "CS",
			"majors" : ["computer science"],
			"minors" : ["business"],
			"graduation" : "1995",
			"url" : "http://www.nait.ca/program_home_78547.htm"
		},
		{
			"name" : "RDC",
			"location" : "Red Deer",
			"degree" : "Eng",
			"majors" : ["Engineering"],
			"minors" : ["Chemistry"],
			"graduation" : "1992",
			"url" : "http://rdc.ab.ca/programs/engineering-bachelor-science"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Architecture Tradeoff Analysis Methodology",
			"school" : "CMU Software Engineering Institute",
			"date" : "2009",
			"url" : "http://www.sei.cmu.edu/"
		},
		{
			"title" : "Nanodegree - Front End Engineer",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "http://www.udacity.com"
		}
	],
	"display" : function() {

	}
};

var projects = {
	"projects" : [
		{
			"title" : "NOOK Press Print on Demand",
			"dates" : "Mar 2014 - Nov 2014",
			"description" : "Deliver the ability to print out physical books from user generated content",
			"images" : ["https://www1.nookassets.com/npassets/assets/nook_press_logo-a6d25ba356b4b9c1c757ea5e0c271060.png"]
		}
	],
	"display" : function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectTitle).append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDesc);
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	}
};


// Display the contents on the resume
bio.display();
work.display();
projects.display();

//Display the Google Map
$("#mapDiv").append(googleMap);