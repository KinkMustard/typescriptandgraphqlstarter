// import {
//   Entity,
//   Column,
//   BaseEntity,
//   PrimaryGeneratedColumn,
//   BeforeInsert
// } from "typeorm";

// @Entity("users")
// export class User extends BaseEntity {
//   @PrimaryGeneratedColumn("uuid") id: string;

//   @Column("varchar", { length: 255 })
//   email: string;

//   @Column("text") password: string;

//   @Column("boolean", { default: false })
//   confirmed: boolean;

//   @Column("boolean", { default: false })
//   forgotPasswordLocked: boolean;

//   @BeforeInsert()
//   async hashPasswordBeforeInsert() {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
// }

import * as bcrypt from "bcryptjs";
import { pre, prop, Typegoose } from "typegoose";

@pre<User>("save", async function(next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
})
class User extends Typegoose {
  @prop() id: string;
  @prop({ maxlength: 255 })
  email: string;
  @prop({ maxlength: 255 })
  password: string;
  @prop({ default: false })
  confirmed: boolean;
  @prop({ default: false })
  forgotPasswordLocked: boolean;
}

const UserModel = new User().getModelForClass(User);

export default UserModel;
