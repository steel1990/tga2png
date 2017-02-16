tga2png
========
This is a pure Node.js tga image to png module.

Requirements
========
* Node.js v6

Installation
========
```
$ npm install tga2png --save
```

API
========
### tga2png(fromPath|buffer, [savePath])
* fromPath: absolute path of the tga file, or the Buffer
* savePath: path to save the png, it's optional
* return: promise

Example
========
```js
var tga2png = require('tga2png');
tga2png('/path/to/x.tga', '/path/to/x.png').then(buf=> {
    console.log('the png buffer is', buf);
}, err => {
    console.log('error', err);
});

tga2png('/path/to/x.tga').then(buf=> {
    console.log('the png buffer is', buf);
}, err => {
    console.log('error', err);
});

```