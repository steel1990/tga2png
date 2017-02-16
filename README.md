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
* fromPath: tga 文件路径，这个参数也可以传读取文件的buffer
* savePath: 保存png的路径，不传将返回png文件的buffer
* return: Promise

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