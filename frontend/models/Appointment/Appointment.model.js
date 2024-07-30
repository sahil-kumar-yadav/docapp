// step 1
import { Express } from "express";
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    date:{
        type:Number,
        required:true,
        lowercase:true,
        unique:true,
    },
    time:{
        type:Number,
        required:true,
        lowercase:true,
        unique:true,
    },
    note:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    hospital:{
        // special type define karna padega
    },
    doctor:{
        // special type define karna padega
    },


},
{timestamps:true})


export const Appointment = mongoose.model("Appointment",appointmentSchema);
