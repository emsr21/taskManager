/**
 * A module exporting functions to access the bank database.
 */
"use strict";

module.exports = {
    showTasks: showTasks,
    selectTask: selectTask,
    addTask: addTask,
    updateTask: updateTask,
    updateTaskStat: updateTaskStat,
    removeTask: removeTask,
    showCategorys: showCategorys,
    task_search: task_search,
    showStatus: showStatus
};

const mysql  = require("promise-mysql");
const config = require("../config/db/config.json");
let db;

/**
 * Main function.
 * @async
 * @returns void
 */
(async function() {
    db = await mysql.createConnection(config);

    process.on("exit", () => {
        db.end();
    });
})();

/**
 * Show all entries in the selected table.
 *
 * @async
 * @param {string} table A valid table name.
 *
 * @returns {RowDataPacket} Resultset from the query.
 */
async function showTasks() {
    let sql = `CALL p_tasks_with_category_status();`;

    const res = await db.query(sql);

    // return res;
    return JSON.parse(JSON.stringify(res[0]));
}


/**
 * Show all entries in the selected table.
 *
 * @async
 * @param {string} table A valid table name.
 *
 * @returns {RowDataPacket} Resultset from the query.
 */
 async function selectTask(id) {
    let sql = `CALL p_task_with_category_status(?);`;

    const res = await db.query(sql, [id]);

    // return res;
    return JSON.parse(JSON.stringify(res[0]));
}

/**
 * Show all entries in the selected table.
 *
 * @async
 * @param {string} table A valid table name.
 *
 * @returns {RowDataPacket} Resultset from the query.
 */
 async function showCategorys() {
    let sql = `SELECT * FROM category;`;
    let res;

    res = await db.query(sql);

    return res;
}


/**
 * Show all entries in the selected table.
 *
 * @async
 * @param {string} table A valid table name.
 *
 * @returns {RowDataPacket} Resultset from the query.
 */
 async function showStatus() {
    let sql = `SELECT * FROM status ORDER BY seq ASC;`;
    let res;

    res = await db.query(sql);

    return res;
}


/**
 * Show all entries in the selected table.
 *
 * @async
 * @param {string} table A valid table name.
 *
 * @returns {RowDataPacket} Resultset from the query.
 */
 async function addTask(name, description, Category, status, sDateTime, dDateTime, eduration) {
    let sql = `CALL p_add_task(?, ?, ?, ?, ?, ?, ?);`;

    await db.query(sql, [name, description, Category, status, sDateTime, dDateTime, eduration]);
}


/**
 * Show all entries in the selected table.
 *
 * @async
 * @param {string} table A valid table name.
 *
 * @returns {RowDataPacket} Resultset from the query.
 */
 async function updateTask(id, name, description, Category, status, sDateTime, dDateTime, eduration) {
    let sql = `CALL p_update_task(?, ?, ?, ?, ?, ?, ?, ?);`;

    await db.query(sql, [id, name, description, Category, status, sDateTime, dDateTime, eduration]);
}


/**
 * Show all entries in the selected table.
 *
 * @async
 * @param {string} table A valid table name.
 *
 * @returns {RowDataPacket} Resultset from the query.
 */
 async function updateTaskStat(task_id, stat_id) {
    let sql = `CALL p_update_task_stat(?, ?);`;

    await db.query(sql, [task_id, stat_id]);
}


/**
 * Show all entries in the selected table.
 *
 * @async
 * @param {string} table A valid table name.
 *
 * @returns {RowDataPacket} Resultset from the query.
 */
 async function removeTask(id) {
    let sql = `CALL p_delete_task(?);`;

    await db.query(sql, [id]);
}


/**
 * Show all entries in the selected table.
 *
 * @async
 * @param {string} table A valid table name.
 *
 * @returns {RowDataPacket} Resultset from the query.
 */
 async function task_search(search) {
    let sql = `CALL p_search_task(?);`;

    const res = await db.query(sql, [search]);

    // return res;
    return JSON.parse(JSON.stringify(res[0]));
}

