const fs = require('fs');
const path = require('path');
const https = require('https');

const images = {
  'best_morocco_destinations.png': 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
  'best_time_visit.jpg': 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
  'marrakech_guide.jpg': 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80',
  'sahara_camping.jpg': 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80',
  'chefchaouen_guide.jpg': 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80',
  'moroccan_food.jpg': 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=80',
  'fes_medina.jpg': 'https://images.unsplash.com/photo-1505993597083-3bd19f7c1f27?auto=format&fit=crop&w=1200&q=80'
};

const outputDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(filename, url) {
  const dest = path.join(outputDir, filename);
  const file = fs.createWriteStream(dest);

  https.get(url, (response) => {
    if (response.statusCode === 302 || response.statusCode === 301) {
      // Handle redirect
      downloadImage(filename, response.headers.location);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Failed to download ${filename}: status code ${response.statusCode}`);
      return;
    }

    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Successfully downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
}

console.log('Starting images download...');
for (const [filename, url] of Object.entries(images)) {
  downloadImage(filename, url);
}
