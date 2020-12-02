# MarsDex Client Repository
Welcome to the Client Repository of the MarsDex. This README.md file will instruct you to run a local version of the MarsDex Client.

|Version|Security|Bugs|Vulnerabilities|
|---|---|---|---|
|[![Generic badge](https://img.shields.io/badge/Version-Alpha-red.svg)](https://shields.io/)|![Repository Security](https://sonar.ti.howest.be/sonar/api/project_badges/measure?project=2020.project-ii%3Amars-client-23&metric=security_rating)|![Repository Bugs](https://sonar.ti.howest.be/sonar/api/project_badges/measure?project=2020.project-ii%3Amars-client-23&metric=bugs)|![Repository Vulnerabilities](https://sonar.ti.howest.be/sonar/api/project_badges/measure?project=2020.project-ii%3Amars-client-23&metric=vulnerabilities)|

## Important URLs

* [Server Repository](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/server)
* [Client Repository](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/client)
* [Public Web Project](https://project-ii.ti.howest.be/mars-23/)

## Instructions for running locally
* Clone the [Client Repository](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/client) to your machine.
* Open the Client Repository in your IDE of choice, make sure it is a gradle project.
* Navigate to `index.html` and click on a browser icon to host the mars-client in intelij.

## Instruction for running the web client locally with a deployed mars-server
* Make sure you also cloned the mars-server with the instructions on the Server Repository [README.md](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/server/-/blob/master/README.md) file.
* Clone the [Client Repository](https://git.ti.howest.be/TI/2020-2021/s3/project-ii/projects/groep-23/client) to your machine.
* Open the Client Repository in your IDE of choice, make sure it is a gradle project.
* Add a new file in the project root and call it `config.json`, add the following JSON code:
```json
{
  "host": "http://localhost:8080",
  "folder": "",
  "group": ""
}
```
* Navigate to `index.html` and click on a browser icon to host the mars-client in intelij.

## Default files

### CSS 
The `reset.css` is a short, often compressed set of CSS rules that resets the styling of all HTML elements to a consistent baseline.


## Contributing
Found a fault in the code, that isn't a duplicated issue? Message Yarne Savaete and we investigate the issue in our team.
