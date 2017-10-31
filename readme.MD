Basic Boiler Plate for JS Apps.

Installation
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
You should probably remove the .git/ directory now from this project as you'll
want your own.

1. Ensure npm & node are installed.
2. Go into the project and run:
    > npm i

The package.json file and webpack*.js are your project files and you need
to maintain them with the correct elements, this is a boiler plate to get
you going.

Packages
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
There are tons of packages and such available via npm.

https://www.npmjs.com/

For instance, you might want to have jquery along for the ride.  My go against
the ES6 principle, but it's still useful.

npm install jquery --save-dev


Adding to code
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

app.js:

    window.$ = require("jquery");
