// pages/api/completedTask.js

import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Task from '../../../lib/model/task'

export async function GET(){
    await mongoose.connect(connectionStr);
    console.log('connected to database!!!');

    const data=await Task.find({isDone:true});
    console.log(data);
    mongoose.connection.close();
    return NextResponse.json(data);
}
