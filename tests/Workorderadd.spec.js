const {test,expect} = require('@playwright/test');
const {Loginclass} = require('../pageobjects/Loginpage');
const {Workorderpage} = require('../pageobjects/Workorder');
const {WorkorderTestData} = require('../testdata/WorkorderData');


test.beforeEach(async({page}) => {
    const loginpg = new Loginclass(page);
    await loginpg.launchurl();      
    await loginpg.login("Admin","12345");
    await page.waitForLoadState();
    await loginpg.Dashboard();
}); 

test ('Add new workorder for Amar', async ({page})=>{
    const workorderaddpg = new Workorderpage(page);
    const Workorderdata = WorkorderTestData;
    await workorderaddpg.movetoworkorderaddpage();
    await workorderaddpg.addnewworkorder(Workorderdata.customername,
        Workorderdata.customerfullname,
        Workorderdata.startdate,
        Workorderdata.enddate,
        Workorderdata.prechecklist,
        Workorderdata.classification,
        Workorderdata.product,  
        Workorderdata.model,
        Workorderdata.serialno,
        Workorderdata.servicecategory,
        Workorderdata.servicetype,  
        Workorderdata.description,
        Workorderdata.jobstatus,);
    await workorderaddpg.confirmationpopup();
    console.log("New workorder has been created for " + Workorderdata.customerfullname);
          
});

