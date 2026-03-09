const timestamp = Date.now();

function generateMobile() {
    return '9' + Math.floor(100000000 + Math.random() * 900000000);
}
const LeadTestData = {
    Lead1: {
    companyname: "Test Company",
    L_firstname: "John",
    L_lastname: "Doe",
    L_email: `john${timestamp}@test.com`,
    L_mobileno: generateMobile(),
    L_address: "123 Main St",
    L_country: "India",
    L_state: "Tamil Nadu",
    L_city: "Chennai",
    L_postalcode: "600005",
    priority: "Hot",
    leadstatus: "Open",
    servicecategory: "AAA category",
    servicetype: "AAA Type",
    product: "Apple Brand",
    model: "M1 MacBook"
}
};
module.exports = { LeadTestData };
