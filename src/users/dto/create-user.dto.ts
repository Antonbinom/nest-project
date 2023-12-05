/* dto - простой объект без какой либо логики,внутри имеет только поля
предназначен для обмена данными между подсистемами
Например Client -Server
*/
export class CreateUserDto {
  readonly email: string;
  readonly password: string;
}
