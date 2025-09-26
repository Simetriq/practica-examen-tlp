import { Schema, Types } from "mongoose";
import { type } from "os";

const UserScehma = new Schema({
  username: { type: String, unique: true, require: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  role: { type: String, enum: ["user", "project_manager", "admin"] },
  //! Schema embebido
  userSettings: {
    campo: { type: String },
  },
});

// MODELO 1: User (Usuario)

//! Campos principales:
// username (string, único, requerido)
// email (string, único, requerido)
// password (string, requerido)
// role (string enum: ['user', 'project_manager', 'admin'])

//! Relación 1:1 Embebida:
// Campo: userSettings (objeto embebido)
// theme: string enum ['light', 'dark', 'auto']
// notifications: boolean
// language: string enum ['es', 'en']
// timezone: string
// Eliminación Lógica:
// Campo: deletedAt (Date)
