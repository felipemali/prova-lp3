import { Document, model, Schema } from "mongoose";

export interface Show extends Document {
  id: string;
  title: string;
  premiere: Date;
  isRunning: boolean;
  language: string;
  mainGenre: string;
  posterUrl: string;
}

const schema = new Schema<Show>({
  id: { type: String, required: true },
  title: { type: String, require: true },
  premiere: { type: Date, require: true },
  isRunning: { type: Boolean, required: false },
  language: { type: String, required: true },
  mainGenre: { type: String, required: true },
  posterUrl: { type: String, required: false },
});

export const ShowModel = model<Show>("Show", schema);

export const validateShowInputs = (showObj: any) => {
  const { id, title, premiere, isRunning, language, mainGenre, posterUrl } =
    showObj;

  const errorMessages: string[] = [];
  const verification = !id || !title || !premiere || !language || !mainGenre;

  if (verification) {
    errorMessages.push("error: At least one mandatory field was not informed");
  }
  if (typeof isRunning !== "undefined" && typeof isRunning !== "boolean") {
    errorMessages.push("error: 'isRunning' must be a boolean");
  }

  return errorMessages;
};
