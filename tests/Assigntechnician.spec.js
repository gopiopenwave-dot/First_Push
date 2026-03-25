const {test,expect}= require('@playwright/test');
const {Loginclass} = require('../pageobjects/Loginpage');
const {AssigntechTestData}= require('../testdata/AssigntechData');
const {Assigntechniciantojob}= require('../pageobjects/Assgntechnician');


test.beforeEach(async ({page}) => {
    const loginpg = new Loginclass(page);
    await loginpg.launchurl();
    await loginpg.login("Admin","12345");
    await page.waitForLoadState();
    await loginpg.Dashboard();
}   );

test ('Assign technician to job', async ({page})=>{

    const assigntechpg = new Assigntechniciantojob(page);
    const Assigntechdata = AssigntechTestData;
    await assigntechpg.Assgintechnician(Assigntechdata.jobstatus,
        Assigntechdata.updatedjobstatus,
        Assigntechdata.technicianname);
    await assigntechpg.jobconformationpopup();
    await assigntechpg.cinformjobstatus();
    


})