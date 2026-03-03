const { test, expect } = require('@playwright/test');

class Loginclass{

constructor(page){
    this.page = page;
    this.loginbutton = page.locator("#UserId");
    this.password = page.locator("#Password");
    this.sigin = page.locator(".common-signin-btn");
    this.pageheader = page.locator(".section_header_title");

}

async login(username,password){
    await this.loginbutton.fill(username);
    await this.password.fill(password);
    await this.sigin.click(); }

async launchurl(){
    await this.page.goto("https://uat.quikallot.com/");}

async Dashboard(){
    await expect(this.pageheader).toHaveText("Dashboard");}

async getCurrentURL() {
    return this.page.url();
}
}

module.exports = {Loginclass};