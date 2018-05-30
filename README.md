
# Challenge:
"Please create a catalogue of people in Star Wars, where you can search for people, and be able to see their extra information like what planet they’re from and what year they’re born. We would also like to know what other people come from that same planet, so that should be in there as well. Build it using your preferred front-end framework (or none, if that’s your thing) and use the star wars api for content (""http://swapi.co”). It should have these simple features:
- Display a simple catalogue of people, with filter and sort options
- People detail page with basic info, planet they’re from, and links to people also on that planet
- Great UX
Try to spend a maximum of about 8 hours and get as far as you can." 

## Approach:
For this project I wanted to split the app into two views:
I - A table to give an overview of characters with some basic info. A filter bar (above) allows to filter down the results.
II - A detailed view, that is linked to the character name in the table and which gives detailed information about a character.
    It was intended that this view also contains a "Planet Box" with residents of the same homeworld. This couldn't be implemented due to time restraints.

###  User Stories:
* As a user I can see characters from the SWAPI, with information like name, gender, birthyear, species and planet.
* I can load more characters from the API with a button (see below).
* I can use a text field to search for names.
* I can use a dropdown for gender and species to filter down the list. Filters are combined.
* Not achieved: I can filter by planet and birth year.
* Not achieved: I sort by birthyear or name.
* If I click on a table entry (name or link) it brings me to the detailed view of a character.
* Not achieved: I also see other residents of the character's homeworld.
* I can go back to the list by clicking a button.

### Additional goals:
* The app doesn't break if there are no results.
* Not fully achieved: All props are type checked.
* The app is (somewhat) responsive and can be viewed on a mobile device.
* The app mimics the style of the SWAPI.
* No errors / warnings in the console.
* Don't use Codaisseur boilerplate code.

### Issues encountered / pain points during the challenge:
While I had a clear understanding of the challenge and the app layout, working with the API was surprisingly difficult and introduced me to new concepts:
* The API does not expose a character id which can be used for routing. I had to retrieve the id from the url property. 
* The people/ planets/ etc. endpoints do not give a full list of all items. This obstacle was new to me as I usually had control over the backend (at Codaisseur) to tailor the response or an API usually responded with the full list. My first approach was to load more characters with a button, making use of the "next" property. This is not very user friendly but I decided to leave it in to demonstrate the approach. 
* Some information as "homeworld" or "species" is not stored directly but provided by a link. In order to populate the table I decided to load all (known) pages and to flatten the response to objects with urls as keys and names as values. I use these objects from the state to do lookups for the table and in my filters. The approach to load all resources (pages) with static parallel promises (Promise.all) is again not ideal and should better be done dynamically. 

### Goals not achieved in time/ things I would improve:
* Load all characters at startup (as done with planets and species).
* Load resources from the API dynamically via the "next" property instead of hard-coding the urls.
* PropTypes: Non-function props do not have prop types.
* Tests: Add JEST/Enzyme tests.
* UI: Make app responsive, improve styling, highlight interactive elements (name, filter).

###  Time spend:
* Approx 11 working hours. The biggest time sink were researching and exploring solutions to the problems named above. I decided to take some extra time to make up for the lost hours and to demonstrate more functionality then in an MVP.

###  Technologies used:
* [React](https://reactjs.org/) - The web framework used for frontend
* [Redux](https://redux.js.org) - State manager for React
* Plain CSS3
* [Yarn](https://yarnpkg.com/lang/en/) - Dependency Management
* [Superagent](https://visionmedia.github.io/superagent/) - For making API requests easier.


### Authors
**Friedrich Striewski**


### License
Feel free to use as you see fit.

