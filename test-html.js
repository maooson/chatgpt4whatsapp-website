const fs = require('fs');
const html = fs.readFileSync('src/components/navbar/navbar.astro', 'utf8');
console.log(html);
