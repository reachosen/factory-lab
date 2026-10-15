const fs = require('fs');
const html = fs.readFileSync(__dirname + '/index.html', 'utf8');
if (!html.includes('Hello')) {
  console.error('FAIL: index.html does not contain Hello');
  process.exit(1);
}
console.log('PASS: index.html contains Hello');
