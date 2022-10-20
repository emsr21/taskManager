/**
 * A module exporting functions to help the routing funktions.
 */
 "use strict";


module.exports = {
    list_date_format: list_date_format,
    date_compare: date_compare
};


function list_date_format(data) {
    
    const formatYmd = date => date.toISOString().slice(0, 10);

    for (let i = 0; i < data.res.length; i++) {
        data.res[i].start = formatYmd(new Date(data.res[i].start));
        data.res[i].deadline = formatYmd(new Date(data.res[i].deadline));
    }

    return data
}

function date_compare(deadline) {
    const now = new Date().getTime();
    deadline = new Date(deadline).getTime();
    let overdue;

    if (now <= deadline) {
        overdue = false;
    } else if (now > deadline) {
        overdue = true
    }

    return overdue;
}
