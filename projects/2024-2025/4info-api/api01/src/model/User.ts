/**
 * Un des usages des DTO est la définition d'objets pour les requêtes (pour ne pas mélager avec les entités BDD)
 */
export class UserDto {
  constructor(public login: string, public password: string) {}
}
