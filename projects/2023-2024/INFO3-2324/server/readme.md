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
-- Création des tables
create table CARDS(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name varchar(255), attack int, type varchar(255));
create table USERS(id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, mail varchar(255) unique, password varchar(255));
create table USERS_TOKENS(id_user INT NOT NULL, token varchar(255) NOT NULL, PRIMARY KEY (id_user, token), CONSTRAINT `fk_users_token_user` FOREIGN KEY (id_user) REFERENCES USERS(id) ON DELETE CASCADE ON UPDATE RESTRICT);
create table USERS_CARDS(id_user INT NOT NULL, id_card INT NOT NULL, PRIMARY KEY (id_user, id_card), CONSTRAINT `fk_users_cards_user` FOREIGN KEY (id_user) REFERENCES USERS(id) ON DELETE CASCADE ON UPDATE RESTRICT, CONSTRAINT `fk_users_cards_card` FOREIGN KEY (id_card) REFERENCES CARDS(id) ON DELETE CASCADE ON UPDATE RESTRICT);
-- Ajout de données de test
INSERT INTO CARDS (name, attack, type) VALUES ('raigeki', 0, 'magick');
INSERT INTO USERS (mail, password) VALUES ('test@test.com','test');
INSERT INTO USERS_TOKENS (id_user, token) VALUES (1,'testToken');
INSERT INTO USERS_CARDS (id_user, id_card) VALUES (1,1);
```

Quelques requêtes en vrac

```sql
-- authent
SELECT id FROM USERS WHERE mail = 'test@test.com' AND password = 'test';
-- Ajout d'un token
INSERT INTO USERS_TOKENS (id_user, token) VALUES (1, 'abcde');
-- Récupération de l'ID à partir du token
SELECT id_user FROM USERS_TOKENS WHERE token = 'abcde';
-- cartes favorties du user 1
select * from CARDS INNER JOIN USERS_CARDS on USERS_CARDS.id_card = CARDS.id AND USERS_CARDS.id_user = 1;
-- la même en enlevant les colonnes inutiles
select CARDS.id, CARDS.name, CARDS.attack, CARDS.type  from CARDS INNER JOIN USERS_CARDS on USERS_CARDS.id_card = CARDS.id AND USERS_CARDS.id_user = 1;
```

## Liens

- [installer mariadb avec homebrew (macOS, Linux)](https://mariadb.com/kb/en/installing-mariadb-on-macos-using-homebrew/)
