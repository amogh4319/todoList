import mongoose from "mongoose";
const {Schema}=mongoose;
const taskSchema=new Schema({
    taskname:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        required:false
    }
});
export default mongoose.models.Task || mongoose.model("Task",taskSchema);