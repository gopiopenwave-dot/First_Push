const {test, expect} = require('@playwright/test');
const {Customerpage} = require('../pageobjects/Customer');
const {customerTestData} = require('../testdata/CustomerData');
const {Loginclass} = require('../pageobjects/Loginpage');

test.beforeEach(async ({page}) => {
    const loginpg = new Loginclass(page);
    await loginpg.launchurl();
    await loginpg.login("Admin","12345");
    await page.waitForLoadState();
    await loginpg.Dashboard();
});

test('Add new customer-Jhon', async ({page}) => {
    const customerpg = new Customerpage(page);
    const Customer1 = customerTestData.Customer_Jhon;
    await customerpg.movetocustomerpage();
    await customerpg.addnewcustomer(
        Customer1.firstname,
        Customer1.legalname,
        Customer1.email,
        Customer1.password,
        Customer1.confirmpassword,
        Customer1.cellno,
        Customer1.address,
        Customer1.country,
        Customer1.state,
        Customer1.city,
        Customer1.postalcode,
    );
});


test('Add new customer - Martha', async({page})=>{
    const customerpg = new Customerpage(page);
    const Customer2 = customerTestData.Customer_Martha;
    await customerpg.movetocustomerpage();
    await customerpg.addnewcustomer(
        Customer2.firstname,
        Customer2.legalname,
        Customer2.email,
        Customer2.password,
        Customer2.confirmpassword,
        Customer2.cellno,
        Customer2.address,
        Customer2.country,
        Customer2.state,
        Customer2.city,
        Customer2.postalcode,
    );
});






