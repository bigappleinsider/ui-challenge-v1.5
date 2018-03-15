# Avenue Code UI Challenge - Part I #

### Story Phrase ###
* As a curious web surfer, I want to be able to locate the coordinates of a given website as well as my current location.

### Business Narrative / Scenario ###
* GeoLocation is a working web application which aims to retrieve details about the user's location. 
* You need to augment GeoLocation with a new form that will allow the user to find out the physical location of websites, by displaying its hosting position on a page. 
* This new form will consist of a text field for the user to input the website domain.  It will also need a "Locate" button.

### Functional / Acceptance Criteria ###
* The new form input field should only accept website domains starting with "www."  or with the host name, e.g., "www.nytimes.com", "nytimes.com" or "g1.com.br" or "www.g1.com.br".
* When the user hits the Locate button, an asynchronous call should be made to http://freegeoip.net/json/:host, where :host corresponds to the user input.
* When the user hits the existing My location button, their current position must also be displayed, **alone or besides a website location** if the user used that feature before.
* When the user hits the Reset location button, the user location must be cleared off from the table (but the website's location should still be displayed, if any).
* You should handle user input (validate host) and server response validations.
* You should create 2 tables, my location search and host search, to present the result of the user search ( IP, HostName, City, Country, Long, Lat )

### Non-Functional / Acceptance Criteria ###
* It is advisable that you employ a web app framework, see "[Technical Details](#markdown-header-technical-details)" for some suggestions.
* Also, it is recommended that you use a presentation framework, see "[Technical Details](#markdown-header-technical-details)" for some suggestions.
* It is expected that you cover at least one feature of your code with JS testing.
* The current available code can be completely removed, as long as all Acceptance Criterias are met.
* Your coding skills will be evaluated, so apply everything you see fit, even with this being a simple app.
* Task automation is a nice addition to your challenge, see "[Technical Details](#markdown-header-technical-details)" for some suggestions.
* It is expected that you know how to properly commit changes in Git, which means you should present meaningful commits with descriptive commit messages.
* Well organized projects have descriptive Readme files. Therefore you should provide as much as you can every useful information such as fundamental decisions taken, the project setup steps, how to execute the unit tests, and any further call outs of any kind.

### Delivery Instructions ###

1. You must provide your BitBucket username. A free BitBucket account can be created at http://bitbucket.org
1. The recruiter will give you read permission to a repository named **ui-challenge**, at https://bitbucket.org/ac-recruitment/ui-challenge
1. You must fork this repository into a private repository on your own account and push your code in there.
1. Once finished, you must give the user **ac-recruitment** read permission on your repository so that you can be evaluated. Then, please contact back your recruiter and he will get an engineer to evaluate your test.
1. After you are evaluated, the recruiter will remove your read permission from the original repository.
1. Its very important that these steps are followed accordingly, as your git and overall version control skill will also be evaluated.

### Format ###

* This assessment must be delivered within 2 days.
* You must provide a README.txt (plain text) or a README.md (Markdown) file at the root of your repository, explaining:
    * How to compile and run the application.
    * How to run the suite of automated tests (unit tests, BDD tests, etc...).
    * Which JS libraries you've decided to use for this challenge.
    * Mention anything that was asked but not delivered and why, and any additional comments.
* Unclear or incomplete README instructions may subtract from your overall evaluation.
* Any questions, please send an email to **recruitment.engineering@avenuecode.com**

### Evaluation Criteria ###

* HTML, CSS, Site Responsiveness
* Functional and Non Function Criteria
* Unit Tests
* Project folder structure
* JS & Code Logic & configuration
* Framework & Design Patterns
* Git/versioning control
* Documentation
* Task Automation

We have both functional and non-functional acceptance criteria, so it is suggested that you pay attention to both. Furthermore, the quality of the application (number of bugs found) will factor into the evaluation.

### Considerations ###
As the project is relatively small, we expect you to achieve the requirements without using any code/file/folder structure auto generator tools.

### Technical Details ###
You should receive a JSON response from http://freegeoip.net/json/:host similar to:

```
{
    "ip": "172.217.10.4",
    "country_code": "US",
    "country_name": "United States",
    "region_code": "CA",
    "region_name": "California",
    "city": "Mountain View",
    "zip_code": "94043",
    "time_zone": "America/Los_Angeles",
    "latitude": 37.4192,
    "longitude": -122.0574,
    "metro_code": 807
}
```

Here are a few suggestions of tools to develop your responsive app:

* Backbone.js - http://backbonejs.org/
* AngularJS - http://angularjs.org/
* KnockoutJS - http://knockoutjs.com/
* Ember.js - http://emberjs.com/
* React - http://facebook.github.io/react/
* Meteor - https://www.meteor.com/
* JQuery - http://jquery.com/
* Twitter Bootstrap - https://twitter.github.com/bootstrap/
* Zurb Foundation - http://foundation.zurb.com/
* RequireJS - http://requirejs.org/
* Underscore - http://underscorejs.org/
* Handlebars - http://handlebarsjs.com/
* Jasmine - http://jasmine.github.io/
* Chai - http://chaijs.com/
* Mocha - http://visionmedia.github.io/mocha/
* QUnit - http://qunitjs.com/
* SASS - http://sass-lang.com/
* LESS - http://lesscss.org/
* Grunt - https://gruntjs.com/
* Gulp - https://gulpjs.com/