import { Model, Column, DataType, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  email: string;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  password: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  banned: boolean;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;
}
