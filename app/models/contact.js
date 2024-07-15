import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Le nom et le prénom sont requis!"],
    trim: true,
    minLength: [2, "Le nom et le prénom doivent comporter plus de 2 caractères!"],
    maxLength: [50, "Le nom et le prénom doivent comporter moins de 50 caractères!"],
  },

  email: {
    type: String,
    required: [true, "L'email est requis!"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Email invalide!"],
  },

  message: {
    type: String,
    required: [true, "Le message est requis!"],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;