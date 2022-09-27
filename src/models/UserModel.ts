import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";
import bcryptjs from "bcryptjs";

@modelOptions({ schemaOptions: { timestamps: true, versionKey: false } })
class User {
  @prop({ type: String, required: true })
  public name: string;

  @prop({ type: String, required: true })
  public lastname: string;

  @prop({ type: String, required: true, unique: true, trim: true })
  public email: string;

  @prop({
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    select: false,
  })
  public password: string | undefined;

  public async encryptPassword(password: string): Promise<string> {
    const salt = await bcryptjs.genSalt(10);
    return bcryptjs.hash(password, salt);
  }

  public async matchPassword(password: string): Promise<boolean> {
    if (!this.password) {
      return false;
    }
    return bcryptjs.compare(password, this.password);
  }
}
export { User };
export default getModelForClass(User);
