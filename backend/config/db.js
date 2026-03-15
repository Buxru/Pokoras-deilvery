import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose
    .connect('mongodb+srv://pokora:7423476@cluster0.rdhn6yg.mongodb.net/?appName=Cluster0')
    .then(()=>console.log("DB connected"));
}