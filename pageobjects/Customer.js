const {test, expect} = require('@playwright/test');

class Customerpage{

constructor(page){
    this.page = page;
    this.customersmenu = this.customersmenu = page.getByRole('link', { name: /Customer/ });
    this.addcustomerbtn = page.getByRole('link', { name: 'Add Customer' });
    this.addbtn = page.locator("button[id='btnAddNew'] svg");
    this.customertype = page.getByLabel('Company', { exact: true });
    this.C_firstname = page.locator('#firstname:visible');
    this.C_legalname = page.locator('#lastname');
    this.C_email = page.getByLabel('Email');
    this.C_pass = page.locator('#Password');
    this.C_passconf = page.getByRole('textbox', { name: '*******' });
    this.C_cellno = page.locator('#cus_phoneno:visible');
    this.C_address = page.locator('[name="AddressOne"]');
    this.C_country = page.locator('#CountryId');
    this.C_state = page.locator("#State");
    this.C_city = page.locator("#city");
    this.C_postalcode = page.locator("#PostalCode");
    this.C_GSTyes = page.locator('#chkGSTInvoiceYes');
    this.C_billaddress = page.locator('#fillBillingAddress');
    this.savebtn = page.getByRole('button', { name: 'Save' });
    this.confirmationmsg = page.locator("//button[normalize-space()='OK']")
}

async movetocustomerpage (){
    await this.customersmenu.click();
    await this.addcustomerbtn.click();
}
async addnewcustomer (firstname,legalname,email,password,confirmpassword,cellno,address,country,state,city,postalcode){
    await this.addbtn.click();
    await expect(this.customertype).toBeChecked();
    await this.C_firstname.fill(firstname);
    await this.C_legalname.fill(legalname);
    await this.C_email.fill(email); 
    await this.C_pass.fill(password);
    await this.C_passconf.fill(confirmpassword);
    await this.C_cellno.fill(cellno);
    await this.C_address.fill(address);
    await this.C_country.selectOption(country);
    await this.page.waitForTimeout(2000);
    await this.C_state.selectOption(state);
    await this.C_city.selectOption(city);
    await this.C_postalcode.selectOption(postalcode);
    await this.C_GSTyes.check();
    await this.C_billaddress.check();
    await this.savebtn.click();
}
 async confirmpopup() {
        await expect(this.confirmationmsg).toBeVisible();
        await this.confirmationmsg.click();
    
 }

}

    module.exports = {Customerpage};







