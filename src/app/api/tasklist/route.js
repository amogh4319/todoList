import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Task from '../../../lib/model/task'

export async function GET(){
    await mongoose.connect(connectionStr);
    console.log('connected to database!!!');

    const data=await Task.find();
    console.log(data);
    mongoose.connection.close();
    return NextResponse.json(data);
}

export async function POST(request){
    const payload=await request.json();
    await mongoose.connect(connectionStr);
    console.log('connectes to database!!!');
    let task=new Task(payload);
    const result=await task.save();
    return NextResponse.json({result})
}