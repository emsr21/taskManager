
USE task_db;

--
-- Removes the procedures if they exists
--
DROP PROCEDURE IF EXISTS p_add_task;
DROP PROCEDURE IF EXISTS p_delete_task;
DROP PROCEDURE IF EXISTS p_update_task;
DROP PROCEDURE IF EXISTS p_delete_task_stat;

DROP PROCEDURE IF EXISTS p_tasks_with_category_status;
DROP PROCEDURE IF EXISTS p_task_with_category_status;
DROP PROCEDURE IF EXISTS p_search_task;


DELIMITER ;;

--
-- Adds a task to the table
--
CREATE PROCEDURE p_add_task(
    new_name VARCHAR(50),
    new_description VARCHAR(150),
    new_category INT,
    new_status INT,
    new_start DATETIME,
    new_deadline DATETIME,
    new_e_duration INT
)

BEGIN
    INSERT INTO task
        (name, description, category, status, start, deadline, e_duration)
    VALUES
        (new_name, new_description, new_category, new_status, new_start, new_deadline, new_e_duration);
END
;;

--
-- Adds a task to the table
--
CREATE PROCEDURE p_update_task(
    s_id INT,
    new_name VARCHAR(50),
    new_description VARCHAR(150),
    new_category INT,
    new_status INT,
    new_start DATETIME,
    new_deadline DATETIME,
    new_e_duration INT
)

BEGIN
    UPDATE task
        SET
            name = new_name,
            description = new_description,
            category = new_category,
            status = new_status,
            start = new_start,
            deadline = new_deadline,
            e_duration = new_e_duration
        WHERE
            id = s_id;
END
;;


--
-- Uppdates a tasks status
--
CREATE PROCEDURE p_update_task_stat(
    s_id INT,
    new_status INT
)

BEGIN
    UPDATE task
        SET
            status = new_status
        WHERE
            id = s_id;
END
;;

--
-- Delete a task by id
--
CREATE PROCEDURE p_delete_task(
    t_id INT
)

BEGIN
    DELETE FROM task WHERE id = t_id;
END
;;

--
-- select the tasks with category
--
CREATE PROCEDURE p_tasks_with_category_status()
BEGIN
    SELECT
        t.id,
        t.name,
        t.description,
        c.id AS "cat_id",
        c.name AS "category",
        t.status AS "stat_id",
        s.name AS "status",
        t.start,
        t.deadline,
        t.e_duration
    FROM task AS t
        JOIN category AS c ON c.id = t.category
        JOIN status AS s ON s.id = t.status;
END ;;

--
-- select the tasks with category
--
CREATE PROCEDURE p_task_with_category_status(
    s_id INT
)
BEGIN
    SELECT
        t.id,
        t.name,
        t.description,
        c.id AS "cat_id",
        c.name AS "category",
        t.status AS "stat_id",
        s.name AS "status",
        t.start,
        t.deadline,
        t.e_duration
    FROM task AS t
        JOIN category AS c ON c.id = t.category
        JOIN status AS s ON s.id = t.status
	WHERE t.id = s_id;
        
END ;;

--
-- searches for a tasks
--
CREATE PROCEDURE p_search_task(
    search VARCHAR(50)
)
BEGIN
    SELECT
        t.id,
        t.name,
        t.description,
        c.id AS "cat_id",
        c.name AS "category",
        t.status AS "stat_id",
        s.name AS "status",
        t.start,
        t.deadline,
        t.e_duration
    FROM task AS t
        JOIN category AS c ON c.id = t.category
        JOIN status AS s ON s.id = t.status
	WHERE t.name LIKE concat('%',search,'%')
		OR t.description LIKE concat('%',search,'%');
        
END ;;

DELIMITER ;
