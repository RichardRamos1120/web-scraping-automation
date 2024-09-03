const puppeteer = require('puppeteer');

async function OpenBrowser(query) {
  try {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate to the specified URL
    await page.goto('https://www2.lionprotects.com/fedex/labels-lion.2024.php?f=co');

    // Set screen size
    await page.setViewport({ width: 1920, height: 1080 });

    // Fill out the form fields using the "query" object
    await page.type('input[name="txtContactName"]', query.txtContactName);
    await page.type('input[name="txtCompany"]', query.txtCompany);
    await page.type('input[name="txtAddress1"]', query.txtAddress1);
    await page.type('input[name="txtCity"]', query.txtCity);
    await page.select('select[name="ddlUSAStates"]', query.ddlUSAStates);
    await page.type('input[name="txtPostalCode"]', query.txtPostalCode);
    await page.type('input[name="txtTelephone"]', query.txtTelephone);
    await page.type('input[name="txtRMANumber"]', query.txtRMANumber);

    await page.select('select[name="ddlDropoffType"]', query.ddlDropoffType);
    await page.type('input[name="txtDimensionsLength"]', query.txtDimensionsLength);
    await page.type('input[name="txtDimensionsWidth"]', query.txtDimensionsWidth);
    await page.type('input[name="txtDimensionsHeight"]', query.txtDimensionsHeight);
    await page.select('select[name="ddlPackageUnits"]', query.ddlPackageUnits);
    await page.type('input[name="txtPackageShippingDetailEstimatedWeight"]', query.txtPackageShippingDetailEstimatedWeight);
    await page.select('select[name="ddlReturnLabelType"]', query.ddlReturnLabelType);


    
  } catch (error) {
    console.error("Error in OpenBrowser:", error);
  }
}

module.exports = { OpenBrowser };
