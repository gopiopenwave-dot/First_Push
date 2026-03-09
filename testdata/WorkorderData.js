const { start } = require("node:repl");

const WorkorderTestData = {
    customername: "Amar",
    customerfullname:"Amar  - 8754986598",
    startdate: "10/03/2026",
    enddate: "12/03/2026 10:20",
    prechecklist: "Before Work Checklist",
    classification: "On Call",
    product: "EV Cars",
    model: "Benz 400i",
    serialno: "EV 6541",
    servicecategory: "AAA category",
    servicetype: "AAA Type",
    description: "Work order for EV car maintenance",
    jobstatus:"Issued"

};

module.exports = { WorkorderTestData };