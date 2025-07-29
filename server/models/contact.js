import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Contact', ContactSchema);
