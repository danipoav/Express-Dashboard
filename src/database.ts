import mongoose from "mongoose";
import dotenv from 'dotenv'
import bcrypt from 'bcrypt';
import Auth from "./models/authModel";
import { bookingSeed, contactSeed, roomSeed, userSeed } from "./seed/seed";
import Booking from "./models/bookingModel";
import Contact from "./models/contactModel";
import User from "./models/userModel";
import Room from "./models/roomModel";
import { authSchema } from "./models/authModel";
import { getAllBookings } from "./controllers/bookingController";

dotenv.config();

const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD as string;
const ATLAS_USER = process.env.ATLAS_USER as string;

const url = `mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@dashboardapi.betsv.mongodb.net/api`

const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(url);
        console.log(`MongoDB connected: ${conn.connection.host}`);

        // Creating new credentials using hash
        // const saltRounds = 10;
        // const hasehdPassword = await bcrypt.hash('admin', saltRounds);
        // const newAuth = new Auth({
        //     username: 'Daniel',
        //     password: hasehdPassword
        // })
        // await newAuth.save()
        // console.log('New User created');
        // mongoose.connection.close();

        //Creating Faker datas using Faker on seed file
        // await Booking.insertMany(bookingSeed);
        // await Contact.insertMany(contactSeed);
        // await Room.insertMany(roomSeed);
        // await User.insertMany(userSeed);


    } catch (error) {
        console.log('Error connection to MongoDB: ' + error);
        process.exit(1);
    }
}

export default connectDB;