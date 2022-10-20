
USE task_db;

DROP TABLE IF EXISTS task;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS status;

-- Skapa tabeller
CREATE TABLE task
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    description VARCHAR(150),
    status INT,
    category INT,
    start DATE,
    deadline DATE,
    e_duration INT,
    a_duration INT,

    PRIMARY KEY (id)
);

CREATE TABLE category
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),

    PRIMARY KEY (id)
);

CREATE TABLE status
(
    id INT NOT NULL AUTO_INCREMENT,
    seq INT NOT NULL UNIQUE,
    name VARCHAR(50),

    PRIMARY KEY (id)
);
