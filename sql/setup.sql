-- Börja med att radera databasen om den finns
DROP DATABASE IF EXISTS task_db;

-- Skapa databas
CREATE DATABASE task_db;

-- Välj vilken databas du vill använda
USE task_db;

-- visa
SHOW DATABASES LIKE "%task_db%";
