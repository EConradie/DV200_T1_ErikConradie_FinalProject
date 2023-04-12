# About Project

This project focuses on research, analytics, implementation and visualisation of my chosen dataset. The API used is about Formula 1 racing. The dataset is visualised utisiling chartjs and other components of react.

## Getting Started

A very import prerequisites is to setup react onto your file, in order to make use of it's functionalities. React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.

HOW TO SETUP REACT

Go to node.js website. In the LTS section, click on windows or mac.

### STEP 1

Setup will get download according to your system requirements. Install the setup.

After installing node.js, open command prompt. Type node -v and npm -v commands one by one. If node and npm are installed correctly, then these commands will return you their respective version numbers.

### STEP 2

Visual Studio Code is the free and open-sourced code editor. It is one of the top most editor used especially for JavaScript application development.

You can download Visual Studio Code according to your OS and system requirements. After download, install it. After opening, it will look like this.

### STEP 3

Create empty folder in any drive. Now, in the Visual Studio Code select File -> Open Folder and select the empty folder you have created and click on Select Folder.

We have created below empty folder.


Selected the same in Visual Studio Code.


Then, go to the Terminal in Visual Studio Code and click on New Terminal. Terminal window will get open below for your selected folder path.

Type command npx create-react-app my-app and hit enter. Installation will get start and it will take some time.

Note: You can give any name instead of my-app.

### STEP 4

To start application you have to change directory first. So Type command as given in the above screen.

Type cd my-app and hit enter.

After that type npm start and hit enter. Your my-app application will get open in the browser. It should be hosted at http://localhost:3000/ url.

If you don’t want to work with create-react-app then you can always work with React.js and Next.js.

Note: set default browser in React.js as per your choice.

That’s it.

# Features and Functionality

### Landing Page

The landing page displays interesting information about 2021 Formula Stats. Information pulled from the API includes: the team and driver standings, upcoming events and a dashboard for the top current driver and team.

### Compare Page

The compare page has a function that allows the user to select the competing drivers of the 2021 formula 1. Information and properties of the selected user is displayed on individual piecharts, a bargraph for current points and a radar chart for the properties. The charts were implemented using chart.js.

### Timeline Page

The timeline page allows the user to select a option of properties using a function to display from every driver that competed in the 2021 Formula 1. The properties are then displayed on a linegprah from chart.js for each of the driver's selected property.


# Concept Process

### Ideation

The general ideation I aimed for for to make the website look aesthetic like how Formula 1 Racing looks. I went for a darker theme colour and highlighted titles and information with Formula 1 Red. The dashboard is a generic design that displays neccessary information on cards and tables inplemented with react. The compare page I went for a side to side comparison of the selected drivers and used the same type of UI as the dashboard. The charts use more prominent colours for the users to see the difference of information.

## Wireframes

Wireframes can be found in the WIREFRAMES file.

## Custom UI

Custom UI can be found in the UI file.

# Development Process

Implementation Process

There was a majority of componenets, frameworks and API information during the implementation process. Using React I implemented most of my cards, tables and selection. Chart.js was used to implement the Pie chart, Line Chart, Radar Chart and Bar Chart. The API I used was API-FORMULA-1 (1.3.1), I used Axios to implement the API and pull information from each driver and team. For the navigation of the website I implemented React Bootstrap to route all my pages and components.

# Future Implementation Process

For future implementations I would have liked to be able to gather more data from my API to display more of a variety of driver information. The API started to get more difficult to pull data into datasets, so I had to reuse some data for my other pages. 


# Final Outcome

Mockups

Demo

# Conclusion

In conclusion the process of designing and developing a website using react was a difficult process to learn. I learned how to implement various frameworks and components to make my website functional. It was quite the challenge to learn the basics of components based coding, as well as frameworks, but after a while I started to catch on. I was very satisfied with my final website design and I feel like there was not much I could have done to improve it.

In the end I did provide functionalities in my website, as well as a aesthetic design.


