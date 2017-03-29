#!/usr/bin/env node

const path = require('path');
const tga2png = require('./index');

const args = process.argv.slice(2);

let tgaFile = args[0];
let outputFile = args[1];

if (!tgaFile) {
    console.log('Has no tga file');
    process.exit();
}
if (!outputFile) {
    console.log('Has no output file');
    process.exit();
}

tga2png(tgaFile, outputFile).then(() => {
    console.log('convert success');
}).catch(err => {
    console.log('convert failed', err);
});