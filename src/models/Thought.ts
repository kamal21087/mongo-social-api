import { Schema, model, Document, Types } from 'mongoose';

interface IReaction {
  reactionId: Types.ObjectId;
  reactionBody: string;
  username: string;
  createdAt: string; // Getter will convert this to a string
}

interface IThought extends Document {
  thoughtText: string;
  createdAt: string; // Getter will convert this to a string
  username: string;
  reactions: IReaction[];
  reactionCount: number;
}

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp: Date) => timestamp.toISOString(),
    },
  },
  {
    toJSON: {
      getters: true, // Enables the `get` method
    },
    id: false,
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp: Date) => timestamp.toISOString(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true, // Enables virtual fields like `reactionCount`
      getters: true, // Enables the `get` method
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function (this: { reactions: IReaction[] }) {
  return this.reactions.length;
});

const Thought = model<IThought>('Thought', thoughtSchema);
export default Thought;
