const today = new Date();
const startdate = new Date(today.getTime() + 60 * 60 * 1000); // ← add 1 hour in milliseconds
const tomorrow = new Date(startdate);
tomorrow.setDate(startdate.getDate() + 1);

const jobstartdate = `${String(startdate.getDate()).padStart(2,'0')}/${String(startdate.getMonth()+1).padStart(2,'0')}/${startdate.getFullYear()} ${String(startdate.getHours()).padStart(2,'0')}:${String(startdate.getMinutes()).padStart(2,'0')}`;

const jobenddate = `${String(tomorrow.getDate()).padStart(2,'0')}/${String(tomorrow.getMonth()+1).padStart(2,'0')}/${tomorrow.getFullYear()} ${String(tomorrow.getHours()).padStart(2,'0')}:${String(tomorrow.getMinutes()).padStart(2,'0')}`;

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