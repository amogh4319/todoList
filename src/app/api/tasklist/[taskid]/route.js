import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Task from '../../../../lib/model/task'

export async function DELETE(request,content){
    const taskId=content.params.taskid;
    console.log(taskId);
    const record={_id:taskId}
    await mongoose.connect(connectionStr);
    const result=await Task.deleteOne(record);
    return NextResponse.json({result,success:true})
}
 
export async function PUT(request,content){
    console.log(content);
    const taskId=content.params.taskid;
    const filter={_id:taskId}
    const payload=await request.json()
    console.log(payload);
    await mongoose.connect(connectionStr);
    const result=await Task.findOneAndUpdate(filter,payload)
    return NextResponse.json({result,success:true})
}