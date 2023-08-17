# Express Js Installation

<img src="https://miro.medium.com/max/365/1*d2zLEjERsrs1Rzk_95QU9A.png" width="300" height="200">

1. Manually 
2. Express Application Generator



# 1. Manually

1.

Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.

	$ mkdir myapp
	$ cd myapp

2.

Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.

	$ npm init

3. 

This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:

entry point: (index.js)

4.

Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.

5.

Now install Express in the myapp directory and save it in the dependencies list. For example:

	$ npm install express --save

OR

To install Express temporarily and not add it to the dependencies list:

	$ npm install express --no-save


By default with version npm 5.0+ npm install adds the module to the dependencies list in the package.json file; with earlier versions of npm, you must specify the --save option explicitly. Then, afterwards, running npm install in the app directory will automatically install modules in the dependencies list.
Next: Hello World 




# 2. Express Application Generator

Use the application generator tool, express-generator, to quickly create an application skeleton.

You can run the application generator with the npx command (available in Node.js 8.2.0).

	$ npx express-generator

For earlier Node versions, install the application generator as a global npm package and then launch it:

	$ npm install -g express-generator


For example, the following creates an Express app named myapp. The app will be created in a folder named myapp in the current working directory and the view engine will be set to Pug:

	$ express --view=pug myapp


Then install dependencies:

	$ cd myapp
	$ npm install



On MacOS or Linux, run the app with this command:

	$ DEBUG=myapp:* npm start

On Windows Command Prompt, use this command:

	set DEBUG=myapp:* & npm start

 ----------
--------
On Windows PowerShell, use this command:

 	$env:DEBUG='myapp:*'; npm start


Then load http://localhost:3000/ in your browser to access the app.

The generated app has the following directory structure:


	.
	├── app.js
	├── bin
	│   └── www
	├── package.json
	├── public
	│   ├── images
	│   ├── javascripts
	│   └── stylesheets
	│       └── style.css
	├── routes
	│   ├── index.js
	│   └── users.js
	└── views
	    ├── error.pug
	    ├── index.pug
	    └── layout.pug

7 directories, 9 files




:+1:
