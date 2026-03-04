const customerTestData = {
    Customer_Jhon: {
        firstname: "John",
        legalname: "Bennett",
        email: `john${timestamp}@test.com`,
        password: "12345",
        confirmpassword: "12345",
        cellno: `9${timestamp.toString().slice(-9)}`,
        address: "123 Main Street",
        country: "India",
        state: "Tamil Nadu",
        city: "Chennai",
        postalcode: "600005",
    },
    Customer_Martha: {
        firstname: "Martha",
        legalname: "Rio",
        email: `martha${timestamp}@test.com`,
        password: "TestPass@456",
        confirmpassword: "TestPass@456",
        cellno: `9${timestamp.toString().slice(-9)}`,
        address: "456 Park Avenue",
        country: "India",
        state: "Tamil Nadu",
        city: "Chennai",
        postalcode: "600004",

    }
};

module.exports = { customerTestData };
