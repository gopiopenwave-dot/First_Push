const {test,expect} = require('@playwright/test');
const {Loginclass} = require('../pageobjects/Loginpage');
const {Leadpage} = require('../pageobjects/Lead');
const {LeadTestData} = require('../testdata/LeadData');

test.beforeEach(async({page}) => {
    const loginpg = new Loginclass(page);
    await loginpg.launchurl();
    await loginpg.login("Admin","12345");
    await page.waitForLoadState();
    await loginpg.Dashboard();
});

test ('Add new lead',async ({page})=>{
    const leadaddpg = new Leadpage(page);
    const Leaddata = LeadTestData.Lead1;
    await leadaddpg.movetoleadaddpage();
    await leadaddpg.addlead(Leaddata.companyname,
        Leaddata.L_firstname,
        Leaddata.L_lastname,
        Leaddata.L_email,
        Leaddata.L_mobileno,
        Leaddata.L_address,
        Leaddata.L_country,
        Leaddata.L_state,
        Leaddata.L_city,
        Leaddata.L_postalcode,
        Leaddata.priority,
        Leaddata.leadstatus,
        Leaddata.servicecategory,
        Leaddata.servicetype,
        Leaddata.product,
        Leaddata.model,);
    await leadaddpg.leadconfirmationpopup();
    console.log("New lead has been created for " + Leaddata.L_firstname);

});