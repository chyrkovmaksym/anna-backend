import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/enums/role.enum';

export type UserDocument = Document & User;

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    type: [{ type: String, enum: Object.values(Role), default: [Role.User] }],
  })
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
