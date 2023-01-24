# The Technical Stuff

This project was a great learning experience as it was my first time working with web servers (express.js), databases (Mongo DB), and the various different deployment options available (I ended up using Render for simplicity and cost).

I wanted the game to function similarly to the actual game where every user is given the same puzzle and it is only refreshed once a day. 

To do this, I decided to create a simple server with a PUT and a GET Request. The PUT command is called once per day using cron-job.org and replaces the current record in my database with a random word from a static Array. The GET command is called whenever a user access the url. This command retrieves the current word and renders the game with the correct rules/formatting.

This was a great initial dive into backend development!

# Note

I have removed my MongoDB URI for privacy.
