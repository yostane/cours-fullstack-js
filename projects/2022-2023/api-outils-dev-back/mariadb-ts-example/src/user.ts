/* add user "dev"
sudo mariadb
CREATE USER 'dev'@'localhost' IDENTIFIED WITH authentication_plugin BY 'dev';
GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on *.* TO 'dev'@'localhost' WITH GRANT OPTION;
create database demo
exit
*/

/* create tables with user "dev": 
mysql -u dev -p
use demo
create table users(id int auto_increment, name varchar(255), token varchar(255), primary key(id));
*/

export class User {
  constructor(public id: number, public name: string, public token: string) {}
}
