const fs = require('fs');
let code = fs.readFileSync('src/main.js', 'utf8');

const target = "navigate('/trip/new');\n  });\n}\n";
const index = code.indexOf(target);
if (index !== -1) {
  const garbageStart = index + target.length;
  const target2 = "function updateAppShellVisibility() {";
  const index2 = code.indexOf(target2);
  
  if (index2 !== -1) {
    code = code.substring(0, garbageStart) + "\n" + code.substring(index2);
    fs.writeFileSync('src/main.js', code, 'utf8');
    console.log("Success");
  }
}
