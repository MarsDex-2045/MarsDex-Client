# Mars web project group XX

## Before you start
* Search for the string XX and replace it with the group number.
  * ctrl shift f in windows to search in ALL files

## Important public urls  
* Web project: https://project-ii.ti.howest.be/mars-23/
* Sonar reports: https://sonar.ti.howest.be/sonar/dashboard?id=2020.project-ii%3Amars-client-23

## Please complete the following before committing the final version on the project
Please **add** any **instructions** required to 
* Make your application work if applicable 
* Be able to test the application (login data)
* View the wireframes

Also clarify
* If there are known **bugs**
* If you haven't managed to finish certain required functionality

## Instructions for running locally
* Run the mars-server with gradle run (in another intelij instance)
* Open the mars-client in phpstorm
  * Navigate to the index.html
  * Click on a browser icon to host the mars-client in intelij.
  
## Instruction for running the web client locally with a deployed mars-server
* Open the mars-client in phpstorm
  * Change the host and group in the config.json
    * group -> marsXX
    * host -> https://project-ii.ti.howest.be
  * Navigate to the index.html
  * Click on a browser icon to host the mars-client in intelij.

## Instructions for testing locally
You can run the validator, CSS and JS rules locally. 
There is no need to push to the server to check if you are compliant with our rules. 
In the interest of sparing the server, please result to local testing as often as possible. 
If everyone will push to test, the remote will not last. 

* Go to the project folder in your command line editor 

* Execute `npm run validate-local` for linux/max users.
* Execute `npm run validate-local-win` for windows users.
* If there are errors, the program execution will halt and show the first error
* If there are no error, a report file will be generated in the `.scannerworks/` directory. You will find the link to the sonar report in this file 

If you want to skip ci remotely, include `[ci skip]` in your commit message. 
This is convenient for when you want to quickly add a certain commit, but do not wish to trigger the whole CI sequence. 

## Default files

### CSS 
The `reset.css` has aleady been supplied, but it's up to you and your team to add the rest of the styles. 
Please feel free to split those up in multiple files. 
We'll handle efficient delivery for products in production in later semesters. 

### JavaScript
A demonstration for connecting with the API has already been set up. 
We urge you to separate your JS files as **atomically as possible**. 
Add folders as you please.  

The web client and server are protected with credentials.
Please add the following header to all fetch calls going out to the server.
* 'Authorization': 'Basic cHJvamVjdG1lZGV3ZXJrZXI6dmVya2VlcmQ=' 

## Extra tips for CSS Grid
In case you get stuck or confused 
https://learncssgrid.com/

And for your convenience, yet use with caution
https://grid.layoutit.com/ 