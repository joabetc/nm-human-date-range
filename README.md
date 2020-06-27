# nm-human-date-range <img src="https://img.shields.io/badge/Project%20Type-Node%20Module-brightgreen.svg" /> <img src="https://img.shields.io/badge/Project%20Stage-Development-yellowgreen.svg" />
A Node Module for formatting date ranges as a human might write them.

# Technologies/Languages

* [NodeJS](https://nodejs.org/)
* [ES2015/ES6](http://es6-features.org/) 
* [Babel](http://babeljs.io/)
* [Rollup](https://rollupjs.org/)
* [Jest](https://facebook.github.io/jest/)

# Usage

Use either `require` or `import`.

Sample:
````
var humanDateRange = require("nm-human-date-range");

var hDateRange = humanDateRange({
      startDate: new Date(2017, 0, 1),
      endDate: new Date(2017, 0, 6)
      });
````

Or if you prefer you can play around with [RunKit](https://runkit.com/joabetc/node-module-nm-human-date-range-sample) or even play bit with it on [StackBlitz](https://stackblitz.com/edit/nm-human-date-range?embed=1&file=index.js)
