const {test,expect } = require('@playwright/test');

class Workorderpage{
    constructor(page){
        this.page = page;
        this.workoredermenu = page.getByText('Work Order').nth(1);
        this.workorder = page.getByText('Work Order').nth(2);
        this.addworkorderbtn = page.locator("//button[@id='btnAddNewJD']//*[name()='svg']");
        this.Existingcustomer = page.getByText('Existing Customer', { exact: true });
        this.customername = page.locator('#firstname:visible');
        this.startdate = page.getByRole('textbox', { name: 'Scheduled Start Time' });
        this.enddate = page.getByRole('textbox', { name: 'Scheduled End Time' });
        this.prechecklist = page.locator('#PreChkLst');
        this.classfication = page.locator('#TicketType');
        this.product = page.locator('#ProductIdval');
        this.model = page.locator('#ModelIdval');
        this.serialno = page.getByRole('textbox', { name: 'Serial No' });
        this.servicecategory = page.locator('#drpTradeMasterId');
        this.servicetype = page.locator('#TicketTypeId');
        this.description = page.getByRole('textbox', { name: 'Work Order Description' });
        this.status = page.locator('#MainStatus');
        this.workordersavebtn = page.getByText('Save', { exact: true });
        this.confirmpopup = page.getByRole('button', { name: 'OK' });
        this.workorderlistpg = page.locator("//h2[@class='common-card-heading'][normalize-space()='Work Order List']");
        this.newworkorder = page.locator('.workOrder.custom-textoverflow-ellipsis').first();
    }

async movetoworkorderaddpage (){
    await this.workoredermenu.click();
    await this.workorder.click();
    await this.addworkorderbtn.click();
}

async addnewworkorder(customername,customerfullname,startdate,enddate,prechecklist,classification,product,model,serialno,servicecategory,servicetype,description,jobstatus){
    await expect(this.Existingcustomer).toBeVisible();
    await this.customername.fill(customername);
        await this.page.getByText(customerfullname).click();
    await this.startdate.fill(startdate);
    await this.enddate.fill(enddate);
    await this.prechecklist.selectOption(prechecklist);
    await this.classfication.selectOption(classification);
    await this.product.selectOption(product);
    await this.model.selectOption(model);
    await this.serialno.fill(serialno);
    await this.servicecategory.selectOption(servicecategory);
    await this.servicetype.selectOption(servicetype);
    await this.description.fill(description);
    await this.status.selectOption(jobstatus);
    await this.workordersavebtn.click();
    


}

async confirmationpopup() {
    await expect(this.confirmpopup).toBeVisible();
    await this.confirmpopup.click();
    await expect(this.workorderlistpg).toBeVisible();
}

async printCreatedWorkorder(){
    const createdworkorder = await this.newworkorder.textContent();
        console.log("Created workorder is: " + createdworkorder);     
  
}

}

module.exports = {Workorderpage};