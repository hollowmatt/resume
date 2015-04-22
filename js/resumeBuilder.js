// Build resume with JSON data
var bio = {
  "name" : "Matt Holloway",
  "role" : "Director of Engineering",
  "contacts" : {
    "mobile" : "650.380.0540",
    "email" : "hollowmatt@gmail.com",
    "github" : "hollowmatt",
    "twitter" : "hollowm",
    "blog" : "www.hollowmatt.com",
    "location" : "Mountain View, CA"
  },
  "welcomeMessage" : "As the Director of Software Engineering at NOOK Press and NOOK.com, " +
                      "I am responsible for driving forward the architecture and guiding " +
                      "the delivery of disruptive solutions in the e-reading and " +
                      "self-publishing spaces.",
  "skills" : [
    "IT Strategy and Management",
    "Enterprise Architecture",
    "Solution Architecture",
    "Application Modernization",
    "Agile Development Methodologies",
    "Web Services",
    "RESTful Services",
    "Java (JEE)",
    "Ruby",
    "Rails",
    "JavaScript",
    "RDBMS",
    "Spring Framework",
    "ORM",
    "NoSQL (MongoDB, Redis)",
    "DevOps",
    "Continuous Integration"
  ],
  "bioPic" : "images/matt.jpg",
  "display" : function () {
    //Header Display
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedName).append(formattedRole).append(formattedPic);
    $("#header").append(formattedMsg).append(HTMLskillsStart);
    for (var skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
    //Contact Display
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub);
    $("#footerContacts").append(formattedTwitter).append(formattedBlog).append(formattedLocation);
  }
};

var work = {
  "jobs" : [
    {
      "employer" : "NOOK Media LLC",
      "title" : "Director of Engineering",
      "location" : "Palo Alto, CA",
      "dates" : "Jan 2013 - present",
      "description" : "Overseeing the program management, architecture, development, " +
                      "QA and release engineering of Platform (back-end Java based " +
                      "services) and Consumer (Ruby on Rails) teams for both the nook.com " +
                      "e-commerce site and the NOOK Press self publishing site, while also " +
                      "delivering API solutions for mobile apps and devices."
    },
    {
      "employer" : "LogicWerx",
      "title" : "Founder/President",
      "location" : "Pittsburgh, PA",
      "dates" : "October 2008 - January 2013",
      "description" : "Principle Platform Engineer at Kemists:  Contributed to development best " +
                      "practices, agile methodologies, high velocity RoR development, shipped 3 " +
                      "products during consultancy.<p><br/>" +
                      "Lead Software Developer at Lapis: Worked directly with startup to create, " +
                      "configure and develop Groovy/Grails application for customer management and " +
                      "training systems.  Shipped 2 products, implemented methodologies and " +
                      "frameworks for the platform.</p><p><br/>" +
                      "Research Consultant at Summa: Worked on a project to analyze and compare large " +
                      "scale JEE application server platforms.  Published a paper on the results in " +
                      "conjunction with Summa consultants.</p><p><br/>" +
                      "Software Development at Field Expert: Worked on Spring MVC application to " +
                      "integrate and deliver JasperReports solutions to a client within the Spring " +
                      "Framework application.  Delivered 1 product.</p>"
    },
    {
      "employer" : "FedEx",
      "title" : "Program Analyst Advisor",
      "location" : "Pittsburgh, PA",
      "dates" : "July 2007 - July 2012",
      "description" : "Responsible for architecture and design of IT systems supporting package sortation " +
                      "and pickups at FedEx Services for FedEx Ground. (Jan 2010 - Jul 2012) <p><br/>" +
                      "Tech lead for ESB Integration using TIBCO Business Works, also Tech lead for J2EE " +
                      "project using Web Services (Spring), JSF, ICEFaces (Aug 2008 - Oct 2008)</p><p><br/>" +
                      "Middle Tier/Integration development using Java based technologies and Tibco Business " +
                      "Works (Aug 2007 - Aug 2008)</p>"
    },
    {
      "employer" : "Field Expert",
      "title" : "Senior Technical Trainer",
      "location" : "Pittsburgh, PA",
      "dates" : "October 2008 - May 2009",
      "description" : "Responsible for the delivery of technical training to corporations across North " +
                      "America raning in topics from Enterprise Design Patters to Java Introduction courses."
    },
    {
      "employer" : "Summa Technologies",
      "title" : "Technical Consultant",
      "location" : "Pittsburgh, PA",
      "dates" : "January 2006 - July 2007",
      "description" : "Responsible for the delivery of best practices and software development/implementation " +
                      "expertise to various customers across the United States."
    },
    {
      "employer" : "NOVA Chemicals",
      "title" : "Enterprise Application Architect",
      "location" : "Pittsburgh, PA",
      "dates" : "March 2004 - January 2006",
      "description" : "Responsible for enterprise wide strategy and standards for application " +
                      "development and deployment; working in concert with the Infrastructure " +
                      "Architect, Data Architect, Security Architect and Business Architect."
    },
    {
      "employer" : "Nova Chemicals",
      "title" : "Systems Analyst",
      "location" : "Red Deer, AB and Sarnia, ON (Canada)",
      "dates" : "August 1996 - March 2004",
      "description" : "Development and delivery of integrated enterprise applications across " +
                      "multiple business units to increase shareholder value using a wide range " +
                      "of technologies. (Sept 1998 - Aug 2004)<p><br/>" +
                      "Administration of local Intranet as well as support and installation of " +
                      "servers, networking equipment and desktop computers. (Aug 1996 - Sept 1998)</p>"
    },
  ],
  "display" : function() {
    for (var job in work.jobs) {
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
      "name" : "Athabasca University",
      "location" : "Athabasca",
      "degree" : "Information Technology",
      "majors" : ["Information Technology"],
      "graduation" : "2003",
      "url" : "http://www.athabascau.ca"
    },
    {
      "name" : "NAIT",
      "location" : "Edmonton",
      "degree" : "Computer Systems Technology",
      "majors" : ["Computer Science"],
      "minors" : ["Business"],
      "graduation" : "1995",
      "url" : "http://www.nait.ca/program_home_78547.htm"
    },
    {
      "name" : "RDC",
      "location" : "Red Deer",
      "degree" : "BSc. General",
      "majors" : ["Chemistry"],
      "minors" : ["Physics"],
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
      "title" : "Software Architecture Principles and Practices",
      "school" : "CMU Software Engineering Institute",
      "date" : "2009",
      "url" : "http://www.sei.cmu.edu/"
    },
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
    //Append Schools
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
      var formattedSchool = HTMLschoolName.replace('%data%', education.schools[school].name).
          replace('#', education.schools[school].url);
      var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
      var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].graduation);
      var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
      $(".education-entry").append(formattedSchool + formattedDegree);
      $(".education-entry").append(formattedDates).append(formattedLocation);

      for (var major in education.schools[school].majors) {
        var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]);
        $(".education-entry").append(formattedMajor);
      }
    }

    //Append Courses
    $("#education").append(HTMLonlineClasses);
    var courseDiv = '<div class="course-entry"></div>';
    $("#education").append(courseDiv);
    for (var course in education.onlineCourses) {
      var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title).
          replace('#', education.onlineCourses[course].url);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
      var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url).
          replace('#', education.onlineCourses[course].url);
      $(".course-entry").append(formattedTitle + formattedOnlineSchool);
      $(".course-entry").append(formattedOnlineDates);
      $(".course-entry").append(formattedOnlineURL);
    }
  }
};

var projects = {
  "projects" : [
    {
      "title" : "NOOK Press Print on Demand",
      "dates" : "Mar 2014 - Nov 2014",
      "description" : "Deliver the ability to print out physical books from user generated content using " +
                      "a shared nothing, multi-tiered architecture.  Built with a Ruby on Rails UI stack " +
                      "with AngularJS as the view layer and a Java based API layer with RESTful services, " +
                      "this system is able to scale as the business grows.",
      "images" : ["https://www1.nookassets.com/npassets/assets/nook_press_logo-a6d25ba356b4b9c1c757ea5e0c271060.png"]
    },
    {
      "title" : "NOOK.com UK",
      "dates" : "Jan 2013 - Mar 2014",
      "description" : "Deliver new features to the NOOK.com UK e-commerce platform, and build out the  " +
                      "architecture with a RESTful services API layer.  Architected and developed with Ruby,  " +
                      "Rails and Sinatra with and Adobe CQ CMS and Adobe Site Catalyst Analytics platform.",
      "images" : ["https://www1.nookassets.com/assets/nook-logo-e2d01a4b676fb9c39ddb4cbb85d72261.png"]
    },
    {
      "title" : "TBT and Sortation Architecture Modernization",
      "dates" : "Jan 2010 - July 2012",
      "description" : "Lead a group of Software Architects and Software Engineers to develop a modern " +
                      "architecture to replace the backbone of the FedEx sortation and transportation " +
                      "systems.  Moved from iSeries to a distributed, shared-nothing, event driven " +
                      "architecture with multiple layers of redundancy and offline capabilities.  Used the " +
                      "CMU SEI ATAM approach to redesign",
      "images" : ["http://careers.van.fedex.com/logos/logo-fedex-services.png"]
    },
    {
      "title" : "Pickup Zipcode Database and ESB Integration",
      "dates" : "Aug 2008 - Oct 2008",
      "description" : "Team Lead for project to create a JSF/ICEFaces application to manage the cutoff and " +
                      "access times for all zipcodes in the US.  Development of WebServices and JMS integration " +
                      "points to other systems, with a Spring MVC client framework",
      "images" : ["http://careers.van.fedex.com/logos/logo-fedex-services.png"]
    },
    {
      "title" : "Customer Pickup Coordination",
      "dates" : "Aug 2007 - Aug 2008",
      "description" : "Worked with a team of engineers to deliver a new JEE application with Web Services " +
                      "and JMS messaging to enable the coordination of package pickups for FedEx Ground",
      "images" : ["http://careers.van.fedex.com/logos/logo-fedex-ground.png"]
    }
  ],
  "display" : function() {
    for (var project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedProjectTitle).append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDesc);
      if (projects.projects[project].images.length > 0) {
        for (var image in projects.projects[project].images) {
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
education.display();
projects.display();

//Display the Google Map
$("#mapDiv").append(googleMap);