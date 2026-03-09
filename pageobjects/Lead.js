const {test,expect} = require('@playwright/test');

class Leadpage{

    constructor(page){
        this.page = page;
        this.leadmenu = page.getByRole('link', { name: 'Leads' });
        this.addleadbtn = page.locator("//button[@id='btnAddInquiry']//*[name()='svg']");
        this.companyname = page.getByPlaceholder('Company Name');
        this.L_firstname = page.getByPlaceholder('First Name');
        this.L_lastname = page.getByPlaceholder('Last Name');
        this.L_email = page.getByPlaceholder('Email');
        this.L_mobileno = page.getByPlaceholder('Mobile Number');
        this.L_address = page.getByPlaceholder('Address');
        this.L_country = page.locator('#CountryId');
        this.L_state = page.locator('[name="State"]');
        this.L_city = page.locator('[name="City"]');
        this.L_postalcode = page.locator('#PostalCode:visible');
        this.priority = page.locator('#Priority');
        this.leadstatus = page.locator('#InquiryStatus');
        this.servicecategory = page.locator('#TradeCategoryId');
        this.servicetype = page.locator('#TicketTypeId');
        this.product = page.locator('#ProductId');
        this.model = page.locator('#ModelId');
        this.leadsavebtn = page.locator("#btnSave");
        this.L_confirmationmsg = page.getByRole('button', { name: 'OK' });
    }

async movetoleadaddpage (){
    await this.leadmenu.click();
    await this.addleadbtn.click();
    }
async addlead(companyname,L_firstname,L_lastname,L_email,L_mobileno,L_address,L_country,L_state,L_city,L_postalcode,priority,leadstatus,servicecategory,servicetype,product,model){
    await this.companyname.fill(companyname);
    await this.L_firstname.fill(L_firstname);
    await this.L_lastname.fill(L_lastname);
    await this.L_email.fill(L_email);       
    await this.L_mobileno.fill(L_mobileno);
    await this.L_address.fill(L_address);
    await this.L_country.selectOption(L_country);
    await this.page.waitForTimeout(2000);
    await this.L_state.selectOption(L_state);
    await this.L_city.selectOption(L_city);
    await this.L_postalcode.selectOption(L_postalcode);
    await this.priority.selectOption(priority);
    await this.leadstatus.selectOption(leadstatus);
    await this.servicecategory.selectOption(servicecategory);
    await this.servicetype.selectOption(servicetype);
    await this.product.selectOption(product);
    await this.model.selectOption(model);
    await this.leadsavebtn.click();
}

async leadconfirmationpopup() {
    await expect(this.L_confirmationmsg).toBeVisible();
    await this.L_confirmationmsg.click();

}


}

module.exports = {Leadpage};