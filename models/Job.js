import mongoose, { Schema } from "mongoose"

const jobSchema = new mongoose.Schema({
    jobType: {
        type: String,
        required: true,
        enum: ["hoop", "playset","furniture","other"],
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    }
})