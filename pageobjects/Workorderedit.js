const {test, expect} = require('@playwright/test');

class WorkorderEditpage {
    constructor(page) {
        this.page = page;
        this.workoredermenu = page.getByText('Work Order').nth(1);
        this.workorder = page.getByText('Work Order').nth(2);
        this.filter = page.locator("//button[@id='btnOpenFilterSidebar']//*[name()='svg']");
        this.statusfilter = page.locator('#MainStatus');
        this.applyfilterbtn = page.getByRole('button', { name: 'Search' });
        






}


}