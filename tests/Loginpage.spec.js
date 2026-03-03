const {test, expect} = require ('@playwright/test');
const { Loginclass } = require('../pageobjects/Loginpage');


test ( 'login test - valid data',async ({page})=>{

    const loginpg = new Loginclass(page);
    await loginpg.launchurl();
    await loginpg.login("Admin","12345");
    await page.waitForLoadState();
    await loginpg.Dashboard();
    console.log(loginpg.getCurrentURL());
})

test ( 'login test - Invalid data',async ({page})=>{

    const loginpg = new Loginclass(page);
    await loginpg.launchurl();
    await loginpg.login("Admin","123456");
    await page.waitForLoadState();
    await expect(page.getByText("Please enter valid credentials")).toBeVisible();  
})
test ( 'login test - without username',async ({page})=>{

    const loginpg = new Loginclass(page);
    await loginpg.launchurl();
    await loginpg.login("","12345");
    await page.waitForLoadState();
    await expect(page.getByText("Username is required")).toBeVisible();

})

test ( 'login test - without password',async ({page})=>{

    const loginpg = new Loginclass(page);
    await loginpg.launchurl();
    await loginpg.login("Admin","");
    await page.waitForLoadState();
    await expect(page.getByText("Password is required")).toBeVisible();

})
test ( 'login test - without username & password',async ({page})=>{

    const loginpg = new Loginclass(page);
    await loginpg.launchurl();
    await loginpg.login("","");
    await page.waitForLoadState();
    await expect(page.getByText("Username is required")).toBeVisible();
    await expect(page.getByText("Password is required")).toBeVisible();

})