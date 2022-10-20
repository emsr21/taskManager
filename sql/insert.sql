USE task_db;

INSERT INTO task(name, description, status, category, start, deadline, e_duration)
VALUES("buy coffe", "need energy", 2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO category(name)
VALUES("work");

INSERT INTO status(seq, name)
VALUES(0, "Overdue");

INSERT INTO status(seq, name)
VALUES(1, "To Do");

INSERT INTO status(seq, name)
VALUES(2, "In Progress");

INSERT INTO status(seq, name)
VALUES(3, "Complete");

SELECT * FROM task;

SELECT * FROM category;