personalWebsite.controller('portfolioController', ['$scope', function ($scope) {
  $scope.mainHeader = "Jason Rahm's Portfolio";
  $scope.oneAtATime = true;
  $scope.examples = [
    {
      "link": "//www.jasonrahm.net/budget-app.html",
      "anchor": "Personal Budget Application",
      "explanation": "I'm creating a Personal Budget Application using AngularJS, CSS, JavaScript and HTML. All of the free budget applications that I've found online are based on spreadsheets, and I hate using spreadsheets. So, I'm building my own. Currently, you're only able to add, edit, delete and print budget information. There is no backend support or user states; that's further down the road. I'm going to keep developing this application, so stay tuned."
    },
    {
      "link": "//www.janus.com/jcg-insti/strategies/janus-global-diversified-risk-premia",
      "anchor": "Select Janus Institutional Pages",
      "explanation": "The Institutional arm of Janus wanted some of their pages completely redesigned and a few new funds added. Unfortunately, the Institutional site is on an older technology stack and CMS and is difficult to manage; new designs are next to impossible without a significant time commitment from the developer team. So, the digital marketing manager looked to me to solve this problem. Using a lot of jQuery and cowboy-style coding (but very minimal inline styling), I was able to provide the pages the Institutional business was looking for while maintaining the look and feel of the actual Institutional site. The above linked page along with the 'Investment Insights', 'Defined Contribution' and 'About Us' pages in the main navigation bar utilize my custom styles while the other buttons take you to the standard Institutional site."
    },
    {
      "link": "//www.janus.com/advisor/campaign/fixed-income-offerings",
      "anchor": "Fixed Income for All Markets",
      "explanation": "I built this page for Janus Capital Group at the beginning of 2015. I was given an Axure file design and was able to lay the page out and implement all of the functionality they desired. Since I did not have access to upload custom styles for the bubbles, I had to use jQuery and a little in-line styling to achieve the colors and hover functionality. The small bubbles at the bottom of the page also feature jQuery tooltips that open on hover. The jQuery UI widgets were available within the Janus CMS, so I could build those pieces without in-line styling."
    },
    {
      "link": "//www.janus.com/retail/insights/wealth-strategies/essential-estate-planning-documents",
      "anchor": "Essential Estate Planning Documents",
      "explanation": "One of the tasks I was given while Janus re-platformed their Retail website was to add jQuery togglers to several articles. The widget was available within the CMS, so I was able to customize the properties to achieve the desired functionality. Due to the nature of the Ingeniux Content Management System, I had to create several common components (<div> tags) in the system so they can be reused wherever togglers are required."
    },
    {
      "link": "//www.janus.com/retail/planning/retirement/converting-your-traditional-ira",
      "anchor": "Converting Your Traditional IRA",
      "explanation": "Another project I took on at Janus was to create common components and an easy method to assign links to the right rail zone on all article pages. I achieved this using taxonomy and special component schemas called 'Annotations'. Rather than hard-coding right-rail links on the necessary pages, there is now a repository of links with associated taxonomy categories from which to choose. Given the opportunity, there are further improvements I would make to the right-rail creation and link assignment method."
    },
    {
      "link": "//www.janus.com/retail/planning/investing-basics/investor-education",
      "anchor": "Investor Education",
      "explanation": "The Java language and Grails framework are used by Janus to dynamically generate data tables throughout the site, primarily on the fund pages. I was able to repurpose the code for one of those tables to create this page. Since Janus content has an expiration date, whenver one of the documents on this table expires, the row will disappear until the content is refreshed and the expiration date changed."
    },
    {
      "link": "//www.coleman.com/coleman-history-us.html",
      "anchor": "Coleman Company History",
      "explanation": "The Coleman history page used to be split out into half-a-dozen different pages, each of which was horribly laid out. I combined everything into one page with the different history snippets placed in a scrollable <div>. A JavaScript scroll to function jumps the scrollable div to the corresponding era."
    },
    {
      "link": "//www.coleman.com/coleman-events.html",
      "anchor": "Coleman Events",
      "explanation": "The Coleman retail department wanted a page on the website to showcase upcomming tent sale events in an effort to increase awareness and drive more people to the events. I used JavaScript and the Google Maps JavaScript API to create a map with markers at each location and corresponding event information cards/popups. Everything below the <h1> and intro paragraphs is generated dynamically using JS. When an event date has passed, it automatically drops off of the page. Furthermore, if there are no current or future events, no map or cards display - only a 'check back later' message."
    }
  ];
}]);