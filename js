const puppeteer = require('puppeteer');

 async function OpenBrowser () {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.lionprotects.com/totalcare-labels-for-free-shipping#slide--2');

  // Set screen size
  await page.setViewport({width: 1920, height: 1080});


  // Wait and click on first result
  await page.locator('a[data-type="2"]').click();


  await page.locator('.map-b').click();




  // Wait for the form fields to be available and fill them out


  document.querySelector("#ddlUSAStates > option:nth-child(6)").selected = true


}


module.exports = {OpenBrowser}