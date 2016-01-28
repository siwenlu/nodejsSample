Sample App
=============
​
In order to build and run the application, please follow through the steps listed as below
​
If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:
​
```
brew install node
```
​
Otherwise, you can download and install from [here](http://nodejs.org/download/).
​
### Install npm and bower, it will generate `node_modules`, `bower_components` fold in your app
​
```
npm install
npm install -g bower
bower install
```
​
### Install Grunt & Gulp Globally
​
Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*
​
```
npm install -g grunt-cli
npm install -g gulp
```
​
Alternatively, you can run the version of gulp installed local to the project instead with
​
```
./node_modules/.bin/gulp
```
​
### Make sure to clear cache when switching branches or projects
​
```
npm run app-clean
```
​
### Remove node and bower folders manually or use the following
​
```
npm run app-remove
```
​
### Install all needed packages and modules for both bower and node
​
```
npm run app-update
```
​
This will run through and install all dependencies listed in `package.json` as well as `bower.json` and download them
to `node_modules`, `bower_components` folders in your project directory. Make sure everything passed and no error(s) in the output results
​
### Start the server to have database set up
​
````
cd sampleServer > npm install > npm start
````
​
### Build the app and preview it on the browser
​
````
grunt serve
````
​
Be sure to be in the app level when running in order for it to work
​
### Build the production ready app
​
````
grunt build
````
​
If there are error(s) happening with the build process, please proceed by adding '--force' option to the build command
​
### Testing the app
​
````
grunt test
````
​
### Install PostgreSQL
​
This app uses PostgreSQL as the database. Please download and install from [here](http://www.postgresql.org/download/)
​
### Create the PostegreSQL database
​
We have to create database named "sampleApp" and two tables as followed:
​
```sql
create database sampleApp;
```
​
Make sure to create the database first before adding in 2 tables
​
```sql
CREATE TABLE personalinfo
(
  name character varying(20) NOT NULL,
  dateofbirth date,
  address character varying(50),
  CONSTRAINT personalinfo_pkey PRIMARY KEY (name)
);
​
CREATE TABLE otherinfo
(
  name character varying(20) NOT NULL,
  gender character varying(10),
  education character varying(20),
  CONSTRAINT otherinfo_pkey PRIMARY KEY (name)
);
```
​
### Update the appropriate credentials for database connection
```js
// sampleServer/routes/users.js
var conString = "pg://{PostgreSQL username}:{PostgreSQL password}@{Hostname}:{Port}/sampleApp";
```
Locate the correct info for your database to fill in the needed fileds:
![](http://i1175.photobucket.com/albums/r629/bminhz/Screen%20Shot%202015-12-04%20at%204.18.31%20PM_zpsxfn3pede.png)
​
In order to locate the PostgreSQL username and password, please use the credentials that needed to login to your localhost PostgreSQL
​
**Note: The xml file that need to be browsed has been created in this app, it is named `person.xml`. You need to change the name value after you browsed this file once. Since the name column in database just can have unique value. This means that the name of the user has to be changed everytime the xml submission is completed**