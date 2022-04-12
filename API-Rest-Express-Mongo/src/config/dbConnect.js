import mongoose from "mongoose";

mongoose.connect("mongodb+srv://nicolas:123@alura.iq0xf.mongodb.net/Livraria")

let db = mongoose.connection;

export default db;