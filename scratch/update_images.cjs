const fs = require('fs');
const path = require('path');

const toursFilePath = path.join(__dirname, '..', 'src', 'data', 'tours.ts');
let toursContent = fs.readFileSync(toursFilePath, 'utf8');

// Replacement mappings for tours
const tourReplacements = [
  { from: "'steptodown.com483735.jpg'", to: "'Family riding camels in the Sahara desert during a Morocco holiday.webp'" },
  { from: "'steptodown.com564210.jpg'", to: "'1 (1).webp'" },
  { from: "'steptodown.com808995.jpg'", to: "'1 (2).webp'" },
  { from: "'steptodown.com779216.jpg'", to: "'1 (4).webp'" },
  { from: "'steptodown.com696946.jpg'", to: "'1 (5).webp'" },
  { from: "'Tanger.webp'", to: "'1 (6).webp'" },
  { from: "'steptodown.com350889.jpg'", to: "'1 (7).webp'" },
  { from: "'steptodown.com427185.jpg'", to: "'1 (8).webp'" },
  { from: "'steptodown.com441847.jpg'", to: "'1 (9).webp'" },
  { from: "'steptodown.com376416.jpg'", to: "'1 (10).webp'" },
  { from: "'steptodown.com237320.jpg'", to: "'1 (11).webp'" },
  { from: "'steptodown.com109557.jpg'", to: "'1 (12).webp'" },
  { from: "'steptodown.com399630.jpg'", to: "'1 (13).webp'" },
  { from: "'merzoga.webp'", to: "'1 (14).webp'" },
  { from: "'steptodown.com837323.jpg'", to: "'1.webp'" },
  { from: "'steptodown.com631412.jpg'", to: "'steptodown.com656110.webp'" }
];

for (const rep of tourReplacements) {
  toursContent = toursContent.replace(rep.from, rep.to);
}

fs.writeFileSync(toursFilePath, toursContent, 'utf8');
console.log('Successfully updated tours.ts images!');

// Update destinations mapping
const destFilePath = path.join(__dirname, '..', 'src', 'data', 'destinations.ts');
let destContent = fs.readFileSync(destFilePath, 'utf8');

const destReplacements = [
  { from: "'steptodown.com237343.jpg'", to: "'1 (1).webp'" },   // Marrakech
  { from: "'steptodown.com454042.jpg'", to: "'1 (2).webp'" },   // Fes
  { from: "'steptodown.com400570.jpg'", to: "'1 (4).webp'" },   // Casablanca
  { from: "'Tanger.webp'", to: "'1 (5).webp'" },                // Tangier
  { from: "'steptodown.com504426.jpg'", to: "'1 (6).webp'" },   // Agadir
  { from: "'steptodown.com399630.webp'", to: "'1 (7).webp'" },  // Ouarzazate
  { from: "'steptodown.com237320.jpg'", to: "'1 (8).webp'" },   // Chefchaouen
  { from: "'merzoga.webp'", to: "'1 (9).webp'" }                 // Merzouga
];

for (const rep of destReplacements) {
  destContent = destContent.replace(rep.from, rep.to);
}

fs.writeFileSync(destFilePath, destContent, 'utf8');
console.log('Successfully updated destinations.ts images!');
