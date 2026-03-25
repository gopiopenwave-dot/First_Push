const {test,expect} = require('@playwright/test');

class Excel{

   constructor(page){
        this.page = page;
        this.workoredermenu = page.getByText('Work Order').nth(1);
        this.workorder = page.getByText('Work Order').nth(2);
        this.samplefilename = page.locator(':text("Download Sample File :")');
        this.downloadsmaplefile = page.locator("button[title='Download'] svg");

   }

async downloadsmaple(){
    await this.workoredermenu.click();
    await this.workorder.click();
    await expect (this.samplefilename).toBeVisible();
    await this.downloadsmaplefile.click();
}

async navigatetoworkorder(){
    await this.workoredermenu.click();
    await this.workorder.click();
}

async onlydownload(){
    await expect (this.samplefilename).toBeVisible();
    await this.downloadsmaplefile.click();
}


}

module.exports = {Excel};