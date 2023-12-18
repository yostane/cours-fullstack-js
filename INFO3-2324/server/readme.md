# Serveur

```sh
npm init -y
npm install express mariadb ts-node
npm install --save-dev @types/express @types/node nodemon
```

## Configuration de mariadb en local

### Création du user et de la BDD

```sh
sudo mysql -u root 
```

```sql
-- prompt sql
CREATE USER 'mettre user name ici'@'localhost' IDENTIFIED BY 'mettre mdp ici';
CREATE 3info2324;
GRANT ALL PRIVILEGES ON 3info2324.* TO 'user name'@'localhost';
exit
```

### Création des tables

```sh
mysql -u "user name" -p
```

```sql
use database 3info2324;
create table CARDS(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name varchar(255), attack int, type varchar(255));
```

## Lines

- [installer mariadb avec homebrew (macOS, Linux)](https://mariadb.com/kb/en/installing-mariadb-on-macos-using-homebrew/)
