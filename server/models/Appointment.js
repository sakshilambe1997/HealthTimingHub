import { Schema,model } from "mongoose";

const appointmentSchema= new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    doctor:{
        type:Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
    },
    appointmentReason:{
        type:String,
        default:"Regular Checkup"
    },
    appointmentDate:{
        type:Date,
        default:Date.now
    },
    appointmentType:{
        type:String,
        enum:["First-Visit","Follow-Up-1","Follow-Up-2","Follow-Up-3",
            "Routine-Checkup"],
            default:"First-Visit",
    },
    status:{
        type:String,
        enum:["Pending","In-Progress","Completed","Cancelled"],
        default:"Pending"
    },
    completedAt:{
        type:Date
    },
    cancelledAt:{
        type:Date
    }
},{
    timestamps:true
})

const Appointment= model('Appointment',appointmentSchema)
export default Appointment