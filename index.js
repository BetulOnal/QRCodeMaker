import inquirer from 'inquirer';
import qr from "qr-image"
import fs from "node:fs"

inquirer
  .prompt([{
    message:"Type in your URL",
    name:"URL"
  }
    /*answers object created here */
  ])
  .then((answers) => {
    var qr_jpeg = qr.image(answers.URL );
    var fileName = answers.URL.replace(/www.|.com|/g,' ') + '.png';
    qr_jpeg.pipe(fs.createWriteStream('photosURL/' + fileName));
    /*user answer convert to QR code */
    
    fs.appendFile('URLS.txt', answers.URL + '\n', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });


  
