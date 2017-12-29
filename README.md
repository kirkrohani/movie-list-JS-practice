# Movie List App


## Level 1 - Front end

- [COMPLETE] Display a list of movies from data hardcoded in your index.jsx.
- [COMPLETE] Add a search bar so that a user may see if a movie is in the list. 
- [COMPLETE] After a user submits the search, display all matches (or partial matches) to that title.
- [COMPLETE] Bonus: Handle the case of no movie by that name found gracefully.
- [COMPLETE] Add an input field for users to add movies.
- [COMPLETE] Add a button to each list item that allows the user to toggle a 'watched' property.
- [COMPLETE] Add two buttons to allow the users to toggle between a list of 'watched' movies and movies 'to watch'.
- [COMPLETE] Add a panel of movie information that appears when the title is clicked (consider starting with hardcoded information)

You can use the following data: 

```javascript
var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];
```

![level 1](https://cloud.githubusercontent.com/assets/7968370/26704355/53960602-46e3-11e7-949f-d00018a10298.png)
![level 1](https://cloud.githubusercontent.com/assets/7968370/26704434/d3c14332-46e3-11e7-9051-1c2e79f9c172.png)
![level 1](https://cloud.githubusercontent.com/assets/7968370/26704460/0fb2e152-46e4-11e7-9873-8f88f94b1b75.png)
![level 1](https://cloud.githubusercontent.com/assets/7968370/26704486/48dd4b34-46e4-11e7-8c41-19ea1abc154f.png)
![level 1](https://cloud.githubusercontent.com/assets/7968370/26704478/3ddcc304-46e4-11e7-83c2-2c04de3baa5d.png)


## Level 2 - Express Server
- [COMPLETE] Move the hardcoded data from index.jsx to your Express Server js file
- [COMPLETE] In your Express Server code a GET route called /movies which will be used to get the hardcoded list of movies
- [COMPLETE] Modify your index.jsx to call this /movies GET route to do an initial load of your data
- [COMPLETE] In your Express Server code a POST route called /movie. This route will allow the user to create a new movie
- [COMPLETE] Modify your index.jsx use the /movie POST route


## Level 3 - API
- [COMPLETE] Go to https://www.themoviedb.org/documentation/api to learn more about the API you will be using. Sign-up for a new API Key. If you do not receive one within 15 minutes ask a proctor for assistance.
- [COMPLETE] Write code in movieAPI.js necessary to call the API (you may use the 'now_playing' endpoint) and retrieve movie results
- [COMPLETE] Create a new Express GET route called /load in which you make a call to the API. Put the retrieved data into the hardcoded movies array in Express index.js
- [COMPLETE] Modify your index.jsx file accordingly to handle the loaded API data. You should no longer have dummy data anywhere.


## Level 4 - Database
- [COMPLETE] Write code in schema.sql to setup your database structure to be able to store your API movie data
- [ ] Write code in database/index.js to insert and retrieve data from your database
- [ ] You will be inserting and retrieving the data retrieved from the API. You may pick and chose which specific fields your store
- [ ] A test file has been provided for you in database/tests/ which you may run independently of your application to test your queries.


## Level 5 - Integration
- [COMPLETE] Modify the 3 Express routes so that they are no longer using or accessing any hardcoded data. 
- [ ] The /load route should be retrieving from the API and inserting into the DB
- [ ] The get /movies route should be retrieving from the db
- [ ] The post /movie route should be inserting into the db
- [COMPLETE] Modify your front end code to only use these routes for both getting and sending data
- [COMPLETE] All other front end functionality (i.e. search, add movie, toggle watched) should still be fully functioning

# Allowable Resources
  You may access any pages that are at the below-listed domains. You don't necessarily have to stick to only the pages listed below. Any pages at the domains listed below are okay.
- [MDN](https://developer.mozilla.org/en-US/)
- [ReactJS Official Website](https://reactjs.org/docs/hello-world.html)
- [ExpressJS Official Website](https://expressjs.com/en/starter/hello-world.html)
- [MySQL Official Website](https://dev.mysql.com/doc/refman/5.6/en/)
- [NPM JS](https://www.npmjs.com/)
- [Webpack JS](https://webpack.js.org/concepts/)