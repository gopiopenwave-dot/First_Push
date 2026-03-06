const {test, expect} = require('@playwright/test');

class Contractpage{

    constructor(page){
        this.page = page;
        this.customersmenu = this.customersmenu = page.getByRole('link', { name: /Customer/ });
        this.contract = page.locator("a[title='Product Contract']");
        this.addcontractbtn = page.locator("button[id='btnAddCustomerProd'] svg");
        this.pagename = page.getByRole('heading',{name:'Product Contract'});
        this.custotype = page.getByLabel('Company', { exact: true });
        this.custoname = page.getByRole('textbox', { name: 'Customer Name' });
        this.productstatus = page.locator('#ProductStatus:visible');
        this.classfication = page.locator('#TicketType:visible');
        this.product = page.locator(`//tr[td[contains(., '--Select--')]]//td[1]//select`);
        this.model = page.locator('#ModelIdval');
        this.serialno = page.getByRole('textbox', { name: 'Serial No' })
        this.period = page.locator('#AMCperiodid');
        this.frequencytype = page.locator("//select[@id='FrequencyTypeId']");
        this.frequencyvalue = page.locator('#FreqValId');
        this.startdate = page.getByPlaceholder('Start Date');
        this.AMCstatus = page.locator('#AmcStatus');
        this.AMCamount = page.getByRole('textbox', { name: 'AMC Amount(Without Tax)' });
        this.savebtn = page.getByRole('button', { name: 'Save' }); 
        this.confirmpopupbtn = page.getByRole('button', { name: 'OK' });

    }

async movetocontractaddpage (){
    await this.customersmenu.click();
    await this.contract.click();
    await this.addcontractbtn.click();
    await expect(this.pagename).toBeVisible();}

async addnewcontract (customername,customerfullname,status,contractclassification,product,
    model,serialno,AMCperiod,frequencytype,frequencyvalue,contractstartdate,AMCstatus,AMCamount){
    await expect(this.custotype).toBeChecked();
    await this.custoname.fill(customername);
    
        await this.page.getByText(customerfullname).click();
    const enteredname = await this.custoname.inputValue();
    console.log(enteredname);
    await this.productstatus.selectOption(status);
    await this.classfication.selectOption(contractclassification);
    await this.product.selectOption(product);
    await this.model.selectOption(model);
    await this.serialno.fill(serialno);
    await this.period.selectOption(AMCperiod);
    await this.frequencytype.selectOption(frequencytype);
    await this.frequencyvalue.selectOption(frequencyvalue);
    await this.startdate.fill(contractstartdate);
    await this.AMCstatus.selectOption(AMCstatus);
    await this.AMCamount.fill(AMCamount);
    await this.page.waitForTimeout(2000);
    await this.savebtn.click();
}
 async confirmationpopup() {
        await expect(this.confirmpopupbtn).toBeVisible();
        await this.confirmpopupbtn.click();
    }


}

module.exports = {Contractpage};