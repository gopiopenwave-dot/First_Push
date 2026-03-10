const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const jobstartdate = `${String(today.getDate()).padStart(2,'0')}/${String(today.getMonth()+1).padStart(2,'0')}/${today.getFullYear()} ${String(today.getHours()).padStart(2,'0')}:${String(today.getMinutes()).padStart(2,'0')}`;

const jobenddate = `${String(tomorrow.getDate()).padStart(2,'0')}/${String(tomorrow.getMonth()+1).padStart(2,'0')}/${tomorrow.getFullYear()} 10:20`;

const WorkorderTestData = {
    customername: "Amar",
    customerfullname: "Amar  - 8754986598",
    startdate: jobstartdate,
    enddate: jobenddate,
    prechecklist: "Before Work Checklist",
    classification: "On Call",
    product: "EV Cars",
    model: "Benz 400i",
    serialno: "EV 6541",
    servicecategory: "AAA category",
    servicetype: "AAA Type",
    description: "Work order for EV car maintenance",
    jobstatus: "Issued"
};

module.exports = { WorkorderTestData };