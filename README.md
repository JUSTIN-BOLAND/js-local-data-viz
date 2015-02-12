# Introduction
This project serves as a template for doing data visualization of data local to your machine in javascript.

As an example, the project uses [Google Chart](https://google-developers.appspot.com/chart/) for displaying the data and [jQuery](http://api.jquery.com/) to retrieve some local data stored in JSON format.

# How to run
We just need to start an http static server - there are many ways of doing this (see [this](https://gist.github.com/willurd/5720255)).
Assuming you have python 2.7 installed on your machine, you can do the following.

- cd into the project folder
- then run `python -m SimpleHTTPServer 8000`

This will start a server serving static content from the project folder.

Now open your browser and go to http://localhost:8000/resources/
