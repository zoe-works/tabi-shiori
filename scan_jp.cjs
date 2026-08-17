const fs = require('fs');
const path = require('path');
const pagesDir = path.join(__dirname, 'src', 'pages');
const mainFile = path.join(__dirname, 'src', 'main.js');

const jpRegex = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/;

function scan(file) {
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, i) => {
        if (jpRegex.test(line)) {
            console.log(`${path.basename(file)}:${i+1}: ${line.trim()}`);
        }
    });
}

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.js'));
files.forEach(f => scan(path.join(pagesDir, f)));
scan(mainFile);
