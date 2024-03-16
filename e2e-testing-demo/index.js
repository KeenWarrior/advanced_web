const selenium = require("selenium-webdriver");

const driver = new selenium.Builder().forBrowser("chrome");

const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.INSTA_USER);

// driver.build().then(async (driver) => {
//   await driver.get("https://www.google.com");
//   const textarea = await driver.findElement(selenium.By.tagName("textarea"));
//   awaittextarea.sendKeys("Hello, World!");
//   textarea.sendKeys(selenium.Key.ENTER);
// });

let counter = 0;

driver.build().then(async (driver) => {
    await driver.get("https://www.instagram.com/accounts/login/");

    const images = await driver.findElements(selenium.By.className('x1lliihq'));
    for(image of images){
        image.takeScreenshot().then((image, err) => {
            require('fs').writeFile(`./images/image${counter}.png`, image, 'base64', (err) => {
                if(err) console.log(err);
            });
            counter++;
        });
    }
  });
