# MiniBeat
> This is a single page application using the ChartBeat api to display a real-time, live updating look at a website's top views and their top references.

##Backend

###Node and Express

I used node and express on the backend to make the initial call to get the chartbeat data for the website gizmodo.com.  It is just a simple server that will make the initial call once the application is loaded.

##FrontEnd

##AngularJS

A used a simple Angular app with ui-router to create the two separate views that load to the page.  I then used a little CSS and HTML to style the data I received from the backend.

###Live Updating

To achieve the real-time aspect of the application I used a web worker that would ping the Chartbeat API every second to look for new data with an XMLHttpRequest object.  Even if the server stops, the webworker will continue updating the data.

##How To Install

To install the app to view the demo please fork or clone the repo.

Make sure you have ```node``` installed on your system (If you don't please download it [here](http://www.nodejs.org))

Run ```npm install```

To start the server use ```npm start``` and the app will be served to ```http://localhost:3000```