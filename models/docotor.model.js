// 3 line ka kaam - model banane my

// step 1

import mongoose from 'mongoose';

// step 2

// Schema - method hai jo leta hai object

// time 1.31
const doctorSchema = new mongoose.Schema(
  
  {
    
    name: {
      type: String,
      required: true,

    },
    Address: {
      type: String,
      required: true,

    },
    Patients: {
      type: String,
      required: true,
      
    },
    year_of_experience: {
      type: int,
      required: true,
      
    },
    startTime: {
        // isko dekna padega
      type: int,
      required: true,
      
    },
    endTime: {
      type: int,
      required: true,
      
    },
    About: {
      type: String,
      required: true,
      
    },
    catagories: {
      type: String,
      required: true,
      
    },
    phone: {
      type: String,
      required: true,
      
    },
    Premium: {
      type: Boolean,
      required: true,
      
    },
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type:String,
      required: true,
      // required: [true,"password is required"]
    }
  }
  ,{timestamps: true} // yeh apne aap createdat and updatedat de deta hai
  // createdAt and UpdateAt  2 hai islye timestamps aata hai na ki timestamp
  
  );

// schema banega kaha py - mongodb my

// step 3 export karne ka tareka

// model kya hai - method hai -> do chize leta hai 1. kya model banau (name) , 2.kiske basis py banau
export const User = mongoose.model('User', userSchema);

// jese he User mongodb my jayega yeh ho jayega users --> small letters and s last my  --> standardize practice -> interview my pucha jata hai
