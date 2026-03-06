const {test,expect} = require('@playwright/test');
const {Contractpage} = require('../pageobjects/Contract');
const {Loginclass} = require('../pageobjects/Loginpage');
const {contractTestData} = require('../testdata/ContractData');

test.beforeEach(async ({page}) => {
    const loginpg = new Loginclass(page);
    await loginpg.launchurl();
    await loginpg.login("Admin","12345");
    await page.waitForLoadState();
    await loginpg.Dashboard();
}   );

test ('Add AMC with materials contract for Amir', async ({page})=>{
    const contactaddpg = new Contractpage(page);
    const Contractdata = contractTestData.Contract1;
    await contactaddpg.movetocontractaddpage();
    await contactaddpg.addnewcontract(Contractdata.customername,
        Contractdata.customerfullname,
        Contractdata.status,
        Contractdata.contractclassification,
        Contractdata.product,
        Contractdata.model,
        Contractdata.serialno,
        Contractdata.AMCperiod,
        Contractdata.frequencytype,
        Contractdata.frequencyvalue,
        Contractdata.contractstartdate,
        Contractdata.AMCstatus,
        Contractdata.AMCamount,);
    await contactaddpg.confirmationpopup();
    console.log("New contract has been created for " + Contractdata.enteredname);

});

test ('Add AMC without materials contract for Amir', async ({page})=>{
    const contactaddpg = new Contractpage(page);
    const Contractdata = contractTestData.Contract2;
    await contactaddpg.movetocontractaddpage();
    await contactaddpg.addnewcontract(Contractdata.customername,
        Contractdata.customerfullname,
        Contractdata.status,
        Contractdata.contractclassification,
        Contractdata.product,
        Contractdata.model,
        Contractdata.serialno,
        Contractdata.AMCperiod,
        Contractdata.frequencytype,
        Contractdata.frequencyvalue,
        Contractdata.contractstartdate,
        Contractdata.AMCstatus,
        Contractdata.AMCamount,);
    await contactaddpg.confirmationpopup();
    console.log("New contract has been created for " + Contractdata.enteredname);

});