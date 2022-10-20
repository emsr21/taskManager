/**
 * General routes.
 */
"use strict";

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

var express = require('express');
var router  = express.Router();
const task_db    = require("../src/task_db.js");
const helper = require("../src/helper.js");

// Add a route for the path /
router.get('/', async (req, res) => {
    let data = {
        title: "Welcome to Task Scheduler",
        nav: "list"
    };

    data.res = await task_db.showTasks();
    data = helper.list_date_format(data);
    data.stat = await task_db.showStatus();
    
    for (let i = 0; i < data.res.length; i++) {
        const overdue = helper.date_compare(data.res[i].deadline);
        console.info(overdue, data.res[i].status);

        if (data.res[i].status != "Complete") {
            console.info(data.res[i].id)
            await task_db.updateTaskStat(data.res[i].id, 1);
        }
    }

    data.res = await task_db.showTasks();
    data = helper.list_date_format(data);

    console.info(data.res);
    console.info(" ")

    res.render("scheduler/task_list", data);
});

router.get('/list', async (req, res) => {
    let data = {
        title: "Welcome to Task Scheduler",
        nav: "list"
    };

    data.res = await task_db.showTasks();
    data.stat = await task_db.showStatus();
    data = helper.list_date_format(data);

    res.render("scheduler/task_list", data);
});

router.get('/task/add', async (req, res) => {
    let data = {
        title: "Welcome to Task Scheduler",
        nav: ""
    };
    data.cat = await task_db.showCategorys();
    data.date = new Date().toLocaleDateString();

    res.render("scheduler/task_add", data);
});

router.post("/real_add", urlencodedParser, async (req, res) => {
    const status = 2;

    await task_db.addTask(
        req.body.tname,
        req.body.description,
        req.body.category,
        status,
        req.body.start_date,
        req.body.deadline_date,
        req.body.eduration
    );

    res.redirect(`/`);
});


router.get("/task/real_delete/:id", async (req, res) => {
    let id = req.params.id;

    await task_db.removeTask(id);

    res.redirect("/");
});

module.exports = router;

router.get('/task/update/:id', async (req, res) => {
    let id = req.params.id;
    let data = {
        title: "Welcome to Task Scheduler",
        nav: ""
    };
    data.id = id;

    data.res = await task_db.selectTask(id);
    data.cat = await task_db.showCategorys();
    data.stat = await task_db.showStatus();

    data = helper.list_date_format(data);
    data.date = new Date().toLocaleDateString();

    res.render("scheduler/task_update", data);
});

router.post("/real_update/:id", urlencodedParser, async (req, res) => {
    let id = req.params.id;

    await task_db.updateTask(
        id,
        req.body.tname,
        req.body.description,
        req.body.category,
        req.body.status,
        req.body.start_date,
        req.body.deadline_date,
        req.body.eduration
    );
    res.redirect(`/`);
});


router.post("/search", urlencodedParser, async (req, res) => {
    let data = {
        title: "Welcome to Task Scheduler",
        nav: "list"
    };

    data.res = await task_db.task_search(req.body.search);
    data.stat = await task_db.showStatus();
    data = helper.list_date_format(data);

    console.log(data);

    res.render("scheduler/index", data);
});

