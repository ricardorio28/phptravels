# phptravels

This project have the Autoamtic tests end-to-end using WebdriverIO (is a Javascript framework based on Selenium) and Cucumber for the Web and mobile platforms.

# Used Technologies

The automatic tests are developed using:

- Javascript
- Selenium
- Cucumber
- Node.JS

# System Requirements

The system requirements are:

- Node.js v16.x or higher

## Setting up the application

All the setting are on the file "wdio.conf.js", where you can see:

- the "specs" to run the tests,
- maxInstances at the same time
- capabilities from the browsers (is configurated to run 2 instances from chrome at the same time)
- logLevel
- bail
- baseUrl
- waitforTimeout
- connectionRetryTimeout
- connectionRetryCount
- services
- reporters
- cucumberOpts
- "before" options

### Install the dependencies

To install the dependencies, you just need to open a terminal on the root of the project and execute the command

```bash
npm install
```

### Run the tests

To run the tests you just need to open a terminal on the root of the project and execute the command

```bash
npm run wdio
```

### Architecture

```tree
.
├── components          -> contains objects that can be shared with other projects (example: Alert)
├── features            -> contains all the cucumber features
├── node_modules        -> packages from node
├── pageObjects         -> page objects from the application. Will contains 1 file for each page 
├── step-definitions    -> contains files with "functions" to link each step from cucumber with the functions from the page Objects 
├── package-lock.json   -> versions from node.js packages installed
├── package.json        -> node.js configurations from our project
├── wdio.conf.js        -> webdriverIO configuirations file
```
