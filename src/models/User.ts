import { Schema, model, Types, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  thoughts: Types.ObjectId[];
  friends: Types.ObjectId[];
  friendCount: number;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, match: /.+@.+\..+/ },
  thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model<IUser>('User', userSchema);
export default User;
