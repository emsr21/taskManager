USE task_db;

INSERT INTO task(name, description, status, category, start, deadline, e_duration)
VALUES("buy coffe", "need energy", 2, 1, "2022-10-22", "2022-10-22", 1);


INSERT INTO task(name, description, status, category, start, deadline, e_duration)
VALUES("drink coffe", "need energy", 2, 1, "2022-10-22", "2022-10-22", 1);


INSERT INTO task(name, description, status, category, start, deadline, e_duration)
VALUES("code task manager", "assinment", 4, 2, "2022-08-26", "2022-10-22", 1);


INSERT INTO task(name, description, status, category, start, deadline, e_duration)
VALUES("Build train models", "for the showcase", 3, 4, "2022-09-29", "2022-11-01", 1);


INSERT INTO task(name, description, status, category, start, deadline, e_duration)
VALUES("start mockup", "my new webbapp idea", 2, 5, "2022-10-18", "2022-10-19", 1);


INSERT INTO category(name)
VALUES("Work");

INSERT INTO category(name)
VALUES("Schoole");

INSERT INTO category(name)
VALUES("Home");

INSERT INTO category(name)
VALUES("Hobbi");

INSERT INTO category(name)
VALUES("Side gigg");


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