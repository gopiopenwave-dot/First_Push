const {test,expect}= require ('@playwright/test');
const {Loginclass} = require('../pageobjects/Loginpage');
const {Excel} = require('../pageobjects/Exceldown-upload');
const { promises } = require('node:dns');

let excelpg;


test.beforeEach(async ({page}) => {
    const loginpg = new Loginclass(page);
    excelpg = new Excel(page);
    await loginpg.launchurl();
    await loginpg.login("Admin","12345");
    await page.waitForLoadState();
    await loginpg.Dashboard();
}   );

test ('Download sample file', async ()=>{
    await excelpg.downloadsmaple();
        
});

test.only ('Download file in custom location',async ({page})=>{
    await excelpg.navigatetoworkorder();
    const [download] = await Promise.all([page.waitForEvent('download'),excelpg.onlydownload()])
    //Set filepath
    const filepath = "downloads/Sampletemplate.xlsx"
    await download.saveAs(filepath);
    console.log("Downloaded file location :"+filepath);


})



