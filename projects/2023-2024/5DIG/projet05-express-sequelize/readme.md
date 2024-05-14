# Notes

- [Tuto mise en place jest avec express](https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/)
- passport js:
  - `npm install passport passport-jwt`

## A faire: Finir le projet

- Modifier (date et commentaire) un rdv et le supprimer
  - Uniquement le médecin ou le patient propriétaire de l'animal rattaché au rdv peuvent modifier ou supprimer
- Avant d'ajouter un rdv, vérifier qu'il n'y a pas de rdv dans le même créneau pour le médecin
- S'assurer que les rdv sont pris dans les minutes 0 ou 30
- Afficher les rendez-vous des animaux du patient (à partir de l'id du patient, trouver les rdv)
- Utiliser une BDD postgres ou mysql ou mariadb
- Héberger l'API sur alwaysdata
