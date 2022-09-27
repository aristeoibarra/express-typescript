import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true, versionKey: false } })
class Task {
  @prop({ type: String, required: true, maxlength: 100, trim: true })
  public title: string;

  @prop({ type: String, maxlength: 280 })
  public description: string;

  @prop({
    type: String,
    required: true,
    enum: ["PENDING", "IN_PROGRESS", "DONE"],
    default: "PENDING",
  })
  public status: string;
}
export { Task };
export default getModelForClass(Task);
