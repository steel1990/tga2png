const fsp = require('fs-promise');
const TGA = require('tga');
const PNG = require('pngjs').PNG;

function tga2png(file, savePath) {
    if (!(file instanceof Buffer)) {
        return fsp.readFile(String(file)).then(buf => {
            return tga2png(buf, savePath);
        }, err => {
            console.error('Read file failed', err.message);
            return Promise.reject(err);
        });
    } else {
        var tga = new TGA(file);
        var png = new PNG({
            width: tga.header.width,
            height: tga.header.height
        });
        png.data = tga.pixels;

        return new Promise((resolve, reject) => {
            var bufs = [];
            png.pack().on('data', d => {
                bufs.push(d);
            }).on('end', () => {
                var buffer = Buffer.concat(bufs);
                if (savePath) {
                    resolve(fsp.writeFile(savePath, buffer).then(() => {
                        return buffer;
                    }));
                } else {
                    resolve(buffer);
                }
            }).on('error', reject);
        });
    }
}

module.exports = tga2png;