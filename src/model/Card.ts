import { Schema, model } from "mongoose";

interface ICard {
  id: string;
  title: string;
  description: string;
}

const cardSchema = new Schema<ICard>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Card = model<ICard>("Card", cardSchema);

export default Card;
