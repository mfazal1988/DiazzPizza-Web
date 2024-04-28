import fs from 'fs';

// Array of file paths
const filePaths = [
    'jquery.min.js',
    'jquery-migrate-3.0.1.min.js',
    'popper.min.js',
    'bootstrap.min.js',
    'jquery.easing.1.3.js',
    'jquery.waypoints.min.js',
    'jquery.stellar.min.js',
    'owl.carousel.min.js',
    'jquery.magnific-popup.min.js',
    'aos.js',
    'jquery.animateNumber.min.js',
    'bootstrap-datepicker.js',
    'jquery.timepicker.min.js',
    'scrollax.min.js',
    //'google-map.js',
    'main.js'
];

// Name of the combined file
const combinedFileName = 'combined.js';

// Concatenate files
const combinedContent = filePaths.map(filePath => fs.readFileSync(`${filePath}`, 'utf8')).join('\n');

// Write combined content to a new file
fs.writeFileSync(combinedFileName, combinedContent);

console.log(`Combined files into ${combinedFileName}`);


// to create combined.js file run below in powershell
//PS C:\Users\mfaza\source\repos\DPizzaWeb\src\js> node concatenate.js
// 