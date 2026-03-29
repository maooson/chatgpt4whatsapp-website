const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    const lines = data.split('\n');
    const headerLines = lines.filter(l => l.includes('<header') || l.includes('Astronav') || l.includes('<nav') || l.includes('max-w-7xl') || l.includes('MenuItems') || l.includes('Contact'));
    console.log(headerLines.join('\n'));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
