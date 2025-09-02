import {model, Schema} from 'mongoose';
import {TwoFA} from '../../types/2FA';

const TwoFASchema = new Schema<TwoFA>({
  // TODO: add userId (Number, required, unique)
  // TODO: add email (String, required, unique)
  // TODO: add twoFactorSecret (String, required)
  // TODO: add twoFactorEnabled (Boolean, default: false)
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  twoFactorSecret: {
    type: String,
    required: true,
  },
  twoFactorEnabled: {
    type: Boolean,
    default: false,
  },
});

export default model<TwoFA>('TwoFA', TwoFASchema);
