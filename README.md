# Express Js Installation

## Steps

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

:+1: