const {test, expect} = require('@playwright/test');

let firstjobnumber;

class Assigntechniciantojob {
    constructor(page) {
        this.page = page;
        this.workoredermenu = page.getByText('Work Order').nth(1);
        this.workorder = page.getByText('Work Order').nth(2);
        this.filter = page.locator("//button[@id='btnOpenFilterSidebar']//*[name()='svg']");
        this.statusfilter = page.locator('#MainStatus');
        this.applyfilterbtn = page.getByRole('button', { name: 'Search' });
        
    /*this download action i have added for few sec wait... i don't know how to haldle 
    Expected: After the search, the 1st job number should be printed and after 
    reaching the job edit page the edited job number should be printed. both should be same
    same(When i run this same code in debug mode the job numbers are same but in normal mode 
    both numbers are not same). so i have added the one more action for the wait, now it's working.*/

        this.downloadsampletemplate = page.getByTitle('Download');
        this.firstworkorder = page.locator('.workOrder.custom-textoverflow-ellipsis').first();
        this.actionbtn = page.locator("//tbody/tr[1]/td[1]/div[1]/a[1]//*[name()='svg']");
        this.editworkorder = page.getByRole('link', { name: 'Edit' }).first();
        this.jobnumber = page.locator("label[for='WorkOrderNo']");
        this.statusdropdown = page.locator('#MainStatus');
        this.techniciandropdown = page.locator('#TechnicianId:visible');
        this.updatebtn = page.getByRole('button',{name:'Update'});
        this.confirmpopup = page.getByRole('button', { name: 'OK' });
        this.workorderfilter = page.getByRole('textbox', { name: 'Work Order Number' });
        this.finaljobstatus = page.locator(`//tr[td[contains(., 'Assigned')]]//td[2]//div`).first();
}

async Assgintechnician (jobstatus, updatedjobstatus,technicianname){
    await this.workoredermenu.click();
    await this.workorder.click();
    await this.filter.click();
    await this.statusfilter.selectOption(jobstatus);
    await this.applyfilterbtn.click();
    await this.downloadsampletemplate.click();
    await expect(this.firstworkorder).toBeVisible();
    firstjobnumber = await this.firstworkorder.textContent();
    console.log("The selected job number is: " + firstjobnumber);
    await this.firstworkorder.click();
    await this.actionbtn.click()
    await this.editworkorder.click();
    const confirmjobnumber = await this.jobnumber.textContent();
    console.log("The edited job number is: " + confirmjobnumber);
    await this.statusdropdown.selectOption(updatedjobstatus);
    await this.techniciandropdown.selectOption(technicianname);
    await this.updatebtn.click();
    

}

async jobconformationpopup() {
    await expect(this.confirmpopup).toBeVisible();
    await this.confirmpopup.click();
}

async cinformjobstatus (){
    await this.filter.click();
    await this.workorderfilter.fill(firstjobnumber);
    await this.applyfilterbtn.click();
    const finaljobstatus = await this.finaljobstatus.textContent();
    console.log("The job number is " + firstjobnumber + " and "+ "The final job status is " + finaljobstatus);


}

}

module.exports = {Assigntechniciantojob};