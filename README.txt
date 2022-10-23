To start this web application you need to have mariaDB and if you don't you will need to install it from
this link ( https://www.mariadbtutorial.com/getting-started/install-mariadb/ ). to check your
installation you can search (MySQL Client) in the windows search bar. Start the application and login
with your password you entered in the installation guide. You can check your user by typing (SELECT USER();)
and you should see your root@localhost.

For my application you will also need to create a new user. Enter the following commands one by one to do this.'

********************************************
CREATE USER ‘dbadm’@’localhost’
IDENTIFIED BY ‘P@ssw0rd’
;

GRANT ALL PRIVILEGES
ON *.* TO ‘dbadm’@’localhost’
WITH GRANT OPTION
;
********************************************

If anything goes wrong you can enter:

********************************************
DROP USER IF EXISTS ‘dbadm’@’localhost’
;
********************************************

Now you can test to login with your user by typing exit to exit mariadb and then logging in with this statement
( mariadb -udbadm -pP@ssw0rd ). If you enter (SELECT USER();) now you should see the user dbadm@localhost. 

Now you should be able to set up the database in the terminal. Press the widows key + R and then search cmd and
press enter. This should open the windows terminal. Locate your taskManager folder and when you are there enter this command:

********************************************
mariadb -udbadm -pP@ssw0rd –table < sql\reset.sql
********************************************

This should set up your database or reset it if it is already up.

Now you should be able to write

********************************************
node index.js
********************************************
in the taskManager folder. To see the application you need to open you browser and go to open localhost:1337.

If you don't have node you can install it here
https://nodejs.org/en/download/