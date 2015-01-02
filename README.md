#Bug Magnet

Exploratory testing assistant for Chrome. Adds common problematic values and
edge cases to the context menu (right-click) for editable elements, so you can
keep them handy and access them easily during exploratory testing sessions.

##Usage

The easiest way to install the extension is from the Chrome Web store. After
installation, just right-click on any editable item on the page and you'll see a
Bug Magnet submenu. Click an item there, and it will be inserted into the
editable field.

##Questions, suggestions

Twitter: [@gojkoadzic](http://twitter.com/gojkoadzic)

##Customising

You can add your own values to the right-click menu by modifying
(src/config.json). The format is simple:

* a hash object property is a sub-menu
* a String property is a menu item. The property name is used as a menu item label 
  and the value is inserted into the text field on click.
* an Array property is a sub-menu, allowing you to quickly add a list of Strings
  without a special label (the element values are used both as menu labels and
  as text to insert).

###Running tests

Install Grunt, Node and NPM (instructions are in [GruntFile.js](GruntFile.js)). Then run tests
from the command line using

    grunt jasmine

###Running from a local setup

Load [manifest.json](src/manifest.json) from the **src** folder in Chrome as an [unpacked
extension](https://developer.chrome.com/extensions/getstarted#unpacked).
